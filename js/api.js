var ip = ''; // Dirección IP para la consulta
var fields = 'country,city,flag.emoji,timezone.current_time'; // Campos que quiero obtener

function fetchData() {
    var XMLHttp = new XMLHttpRequest();
    XMLHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var ipwhois = JSON.parse(this.responseText);
            // Actualizo el contenido del div
            document.getElementById("country").textContent = ipwhois.country;
            document.getElementById("city").textContent = ipwhois.city;
            document.getElementById("flag").textContent = ipwhois.flag.emoji;

            // Obtengo la hora solamente
            var dateTimeString = ipwhois.timezone.current_time;
            var dateTime = new Date(dateTimeString);
            var hours = dateTime.getHours();
            var minutes = dateTime.getMinutes();
            var seconds = dateTime.getSeconds();
            var formattedTime = hours.toString().padStart(2, '0') + ':' +
                minutes.toString().padStart(2, '0') + ':' +
                seconds.toString().padStart(2, '0');
            document.getElementById("timezone").textContent = formattedTime;
        }
    };

    // Salida
    var url = 'https://ipwho.is/' + ip + '?output=json&fields=' + fields;
    XMLHttp.open('GET', url, true);
    XMLHttp.send();
}

// Actualizar cada 1 minuto
fetchData();
setInterval(fetchData, 60000); 