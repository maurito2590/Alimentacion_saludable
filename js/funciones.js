let ingredientesJSON; // Almacenar el JSON
const carritoDeCompras = [];
let precioTotalCarrito = 0;

// Cargar el JSON
function cargarJSON() {
  return fetch('matrices.json') // URL del JSON
    .then(response => response.json()) // Convierte la respuesta en JSON
    .then(data => {
      ingredientesJSON = data; // Asignar el JSON
      console.log('JSON cargado correctamente');
    })
    .catch(error => {
      console.error('Error al cargar el JSON:', error);
    });
}

// Actualizacion en tiempo real
function actualizarInfoProductoEnDOM(productoID) {
  const producto = ingredientesJSON.categoriasDeIngredientes.reduce((prev, current) => {
    return prev.concat(current.ingredientes);
  }, []).find(ingrediente => ingrediente.nombre === productoID);

  if (producto) {
    document.getElementById(`cantidad${productoID}`).textContent = producto.cantidad;
  } else {
    console.error(`Producto ${productoID} no encontrado en el JSON.`);
  }
}

// Agregar ingredientes
function agregarAlCarrito(ingredienteID) {
  for (const categoria of ingredientesJSON.categoriasDeIngredientes) {
    for (const ingrediente of categoria.ingredientes) {
      if (ingrediente.nombre === ingredienteID) {
        if (ingrediente.cantidad > 0) {
          ingrediente.cantidad--;
          carritoDeCompras.push({ nombre: ingrediente.nombre, precio: ingrediente.precio });
          calcularTotalCarrito();
          actualizarInfoProductoEnDOM(ingredienteID); // Actualizar la cantidad en el DOM
          return `Se ha agregado ${ingrediente.nombre} al carrito.`;
        } else {
          return `El ingrediente ${ingrediente.nombre} no está disponible.`;
        }
      }
    }
  }
  return `El ingrediente con ID ${ingredienteID} no se encontró en el JSON de ingredientes.`;
}

// Quitar ingredientes
function quitarDelCarrito(ingredienteID) {
  const index = carritoDeCompras.findIndex(ingrediente => ingrediente.nombre === ingredienteID);

  if (index !== -1) {
    const ingrediente = carritoDeCompras[index];
    incrementarCantidadDisponible(ingrediente);
    carritoDeCompras.splice(index, 1);
    calcularTotalCarrito();
    actualizarInfoProductoEnDOM(ingredienteID); // Actualizar la cantidad en el DOM
    return `Se ha quitado ${ingrediente.nombre} del carrito.`;
  } else {
    return `El ingrediente ${ingredienteID} no se encontró en el carrito.`;
  }
}

// Incrementar la cantidad disponible de un ingrediente en el JSON
function incrementarCantidadDisponible(ingrediente) {
  for (const categoria of ingredientesJSON.categoriasDeIngredientes) {
    for (const ingredienteEnMatriz of categoria.ingredientes) {
      if (ingrediente.nombre === ingredienteEnMatriz.nombre) {
        ingredienteEnMatriz.cantidad++;
        return;
      }
    }
  }
}

// Calcular el valor total del carrito
function calcularTotalCarrito() {
  precioTotalCarrito = 0;
  for (const ingrediente of carritoDeCompras) {
    precioTotalCarrito += ingrediente.precio;
  }
}

// Cargar el JSON al iniciar la aplicación
cargarJSON();
