var ip = ''; // Deja en blanco para buscar la dirección IP actual
var fields = 'country,city,flag.emoji,timezone.current_time'; // Campos a obtener

function fetchData() {
    var XMLHttp = new XMLHttpRequest();
    XMLHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var ipwhois = JSON.parse(this.responseText);
            console.log("Country:", ipwhois.country);
            console.log("City:", ipwhois.city);
            console.log("Flag Emoji:", ipwhois.flag.emoji);

            // Obtengo la cadena de tiempo de la respuesta
            var dateTimeString = ipwhois.timezone.current_time;

            // Divido la cadena de tiempo en partes
            var parts = dateTimeString.split('T');
            var timePart = parts[1].split('-')[0];

            // Actualizo el contenido de los elementos HTML
            document.getElementById("country").textContent = ipwhois.country;
            document.getElementById("city").textContent = ipwhois.city;
            document.getElementById("flag").textContent = ipwhois.flag.emoji;
            document.getElementById("timezone").textContent = timePart;
        }
    };

    // Salida
    var url = 'https://ipwho.is/' + ip + '?output=json&fields=' + fields;
    XMLHttp.open('GET', url, true);
    XMLHttp.send();
}

// Realiza la primera solicitud
fetchData();

// Actualizo cada 30 segundos
setInterval(fetchData, 30000);
