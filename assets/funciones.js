// Función para agregar ingredientes al carrito de compras
function agregarAlCarrito(ingredienteID) {
    // Buscamos el ingrediente en la matriz de categorías
    for (const categoria of categoríasDeIngredientes) {
      for (const ingrediente of categoria.ingredientes) {
        if (ingrediente.nombre === ingredienteID) {
          if (ingrediente.cantidad > 0) {
            // Reducimos la cantidad disponible del ingrediente
            ingrediente.cantidad--;
            // Agregamos el ingrediente al carrito
            carritoDeCompras.push(ingrediente);
            // Calculamos el valor total del carrito
            calcularTotalCarrito();
            return `Se ha agregado ${ingrediente.nombre} al carrito.`;
          } else {
            return `El ingrediente ${ingrediente.nombre} no está disponible.`;
          }
        }
      }
    }
    return `El ingrediente con ID ${ingredienteID} no se encontró en la matriz de ingredientes.`;
  }
  
  // Función para quitar ingredientes del carrito de compras
function quitarDelCarrito(ingredienteID) {
    // Buscamos el ingrediente en el carrito
    const index = carritoDeCompras.findIndex(ingrediente => ingrediente.nombre === ingredienteID);
    
    if (index !== -1) {
      const ingrediente = carritoDeCompras[index];
      // Aumentamos la cantidad disponible del ingrediente
      incrementarCantidadDisponible(ingrediente);
      // Restamos el ingrediente del carrito
      carritoDeCompras.splice(index, 1);
      // Calculamos el valor total del carrito
      calcularTotalCarrito();
      return `Se ha quitado ${ingrediente.nombre} del carrito.`;
    } else {
      return `El ingrediente ${ingredienteID} no se encontró en el carrito.`;
    }
  }
  
  // Función para incrementar la cantidad disponible de un ingrediente en la matriz
  function incrementarCantidadDisponible(ingrediente) {
    for (const categoria of categoríasDeIngredientes) {
      for (const ingredienteEnMatriz of categoria.ingredientes) {
        if (ingrediente.nombre === ingredienteEnMatriz.nombre) {
          ingredienteEnMatriz.cantidad++;
          return;
        }
      }
    }
  }

  // Función para calcular el valor total del carrito
function calcularTotalCarrito() {
    precioTotalCarrito = 0;
    for (const ingrediente of carritoDeCompras) {
      precioTotalCarrito += ingrediente.precio;
    }
  }
  
  // Otras funciones del carrito irán aquí

  