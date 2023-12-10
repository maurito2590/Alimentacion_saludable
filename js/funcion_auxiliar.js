

// Cargar los precios y la cantidad al inicio
function cargarPreciosYCantidad() {
  for (const categoria of ingredientesJSON.categoriasDeIngredientes) {
    for (const ingrediente of categoria.ingredientes) {
      const elementoCantidad = document.getElementById(`cantidad${ingrediente.ID}`); // Cambio en la búsqueda del elemento
      const elementoPrecio = document.getElementById(`precio${ingrediente.ID}`); // Cambio en la búsqueda del elemento

      if (elementoCantidad) {
        elementoCantidad.textContent = ingrediente.cantidad;
      }

      if (elementoPrecio) {
        elementoPrecio.textContent = ingrediente.precio;
      }
    }
  }
}

// Llamarla al inicio
window.addEventListener('load', cargarPreciosYCantidad);





document.addEventListener('DOMContentLoaded', function () {
  // Obtengo todos los elementos con la clase "producto"
  const elementosProducto = document.querySelectorAll('.producto');

  // Recorro cada elemento y agrega el ID y la clase a la imagen
  elementosProducto.forEach(elemento => {
    const idContenedor = elemento.id;

    // Asigno el ID y agrego la clase
    const botonAgregarCarrito = elemento.querySelector('button[onclick="agregarAlCarrito(\'' + idContenedor + '\')"]');
    botonAgregarCarrito.id = 'btn-' + idContenedor;
    botonAgregarCarrito.classList.add('agregar');

    // Agrega la clase "quitar"
    const botonQuitarCarrito = elemento.querySelector('button[onclick="quitarDelCarrito(\'' + idContenedor + '\')"]');
    botonQuitarCarrito.classList.add('quitar');

    // Agrega la clase "imagen__producto"
    const imagenesProducto = elemento.querySelectorAll('img');
    imagenesProducto.forEach(imagen => {
      imagen.classList.add('imagen__producto');
    });
  });
});


const comprarBtn = document.getElementById("comprar");

if (comprarBtn) {
  comprarBtn.addEventListener("click", function () {
    // Bloquear el botón después de hacer clic
    comprarBtn.disabled = true;

    // Datos a enviar
    const datosAEnviar = {
      productos: carritoDeCompras,
      cantidad_total: carritoDeCompras.length,
      precio_total: precioTotalCarrito,
    };

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
      console.log('Respuesta del servidor:', data);

      // Almacena la preference_id en la sessionStorage
      sessionStorage.setItem('preference_id', data.preference_id);
      console.log('preference_id almacenado en la sesión:', sessionStorage.getItem('preference_id'));

      // Redirige solo si la preference_id se creo
      if (sessionStorage.getItem('preference_id')) {
        window.open('MP.html', '_blank');
        comprarBtn.disabled = false;
      } else {
        console.log('La preference_id no está presente en la sesión.');
        alert("Ha ocurrido un error, por favor presiona F5")
      }
    })
    .catch(error => {
      console.error('Error al enviar datos al servidor:', error);

      // Habilita el boton en caso de error
      comprarBtn.disabled = false;
    });
  });
}