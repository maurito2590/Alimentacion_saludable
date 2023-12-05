const comprarBtn = document.getElementById("comprar");
if (comprarBtn) {
  comprarBtn.addEventListener("click", function () {
    // Datos a enviar
    const datosAEnviar = {
      productos: carritoDeCompras,
      cantidad_total: carritoDeCompras.length,
      precio_total: precioTotalCarrito,
    };

    let preferenceID;
    
    // Solicitud POST
    fetch('http://localhost:8001/procesar_compra', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datosAEnviar)
    })
    .then(response => response.json())
    .then(data => {
      preferenceID = data.data.preference_id;
      console.log('ID de preferencia recuperado', PreferenceID);
    })
    .catch(error => {
      console.error('Error al enviar datos al servidor:', error);
    });
  });
} else {
  console.error('El elemento comprar-btn no se encontró en el DOM.');
}