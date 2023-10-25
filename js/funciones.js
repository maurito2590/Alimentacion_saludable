const ingredientesJSON = {
  "categoriasDeIngredientes": [
    {
      "categoria": "Ingredientes Básicos Veganos",
      "ingredientes": [
        { "nombre": "Vegetales", "ID": "Vegetales", "precio": 2345, "cantidad": 15 },
        { "nombre": "Frutas", "ID": "Frutas", "precio": 567, "cantidad": 20 },
        { "nombre": "Cereales", "ID": "Cereales", "precio": 1987, "cantidad": 12 },
        { "nombre": "Semillas", "ID": "Semillas", "precio": 2435, "cantidad": 8 },
        { "nombre": "Frutos secos", "ID": "FrutosSecos", "precio": 789, "cantidad": 5 },
        { "nombre": "Fécula de mandioca", "ID": "FeculaMandioca", "precio": 2345, "cantidad": 25 },
        { "nombre": "Maicena", "ID": "Maicena", "precio": 987, "cantidad": 18 },
        { "nombre": "Salvado", "ID": "Salvado", "precio": 654, "cantidad": 10 },
        { "nombre": "Manteca de cacao", "ID": "MantecaCacao", "precio": 3210, "cantidad": 30 },
        { "nombre": "Manteca de Almendras", "ID": "MantecaAlmendras", "precio": 4321, "cantidad": 22 },
        { "nombre": "Manteca de maní", "ID": "MantecaMani", "precio": 5432, "cantidad": 16 },
        { "nombre": "Manteca vegana", "ID": "MantecaVegana", "precio": 876, "cantidad": 18 },
        { "nombre": "Goma xantana", "ID": "GomaXantana", "precio": 9876, "cantidad": 30 },
        { "nombre": "Hierbas", "ID": "Hierbas", "precio": 6543, "cantidad": 25 },
        { "nombre": "Mayonesa vegana", "ID": "MayonesaVegana", "precio": 5678, "cantidad": 10 },
        { "nombre": "Levadura de cerveza", "ID": "LevaduraCerveza", "precio": 2109, "cantidad": 12 },
        { "nombre": "Leche de arroz", "ID": "LecheArroz", "precio": 987, "cantidad": 8 },
        { "nombre": "Leche de almendra", "ID": "LecheAlmendra" , "precio": 2345, "cantidad": 10 },
        { "nombre": "Leche de avena", "ID": "LecheAvena", "precio": 2109, "cantidad": 15 },
        { "nombre": "Leche de soja", "ID": "LecheSoja", "precio": 9876, "cantidad": 10 },
        { "nombre": "Leche de cáñamo", "ID": "LecheCanamo", "precio": 4321, "cantidad": 5 },
        { "nombre": "Leche de coco", "ID": "LecheCoco", "precio": 5432, "cantidad": 20 },
      ]
    },
    {
      "categoria": "Ingredientes para simular el sabor de la proteína animal",
      "ingredientes": [
        { "nombre": "Pimentón ahumado", "ID": "PimentonAhumado", "precio": 1234, "cantidad": 10 },
        { "nombre": "Alga nori", "ID": "AlgaNori", "precio": 2345, "cantidad": 15 },
        { "nombre": "Tofu", "ID": "Tofu", "precio": 567, "cantidad": 20 }
      ]
    },
    {
      "categoria": "Repostería",
      "ingredientes": [
        { "nombre": "Sustitutos del huevo", "ID": "SustitutosHuevo", "precio": 1987, "cantidad": 12 },
        { "nombre": "Semillas de lino", "ID": "SemillasLino", "precio": 2435, "cantidad": 18 },
        { "nombre": "Semillas de chía", "ID": "SemillasChia", "precio": 789, "cantidad": 20 },
        { "nombre": "Aceite de coco", "ID": "AceiteCoco", "precio": 2345, "cantidad": 25 },
        { "nombre": "Néctar de agave", "ID": "NectarAgave", "precio": 987, "cantidad": 15 },
        { "nombre": "Sirope de arce", "ID": "SiropeArce", "precio": 3210, "cantidad": 20 },
        { "nombre": "Melaza residual", "ID": "MelazaResidual", "precio": 4321, "cantidad": 25 },
        { "nombre": "Masas y hojaldres", "ID": "MasasHojaldres", "precio": 5432, "cantidad": 10 }
      ]
    },
    {
      "categoria": "Celiacos",
      "ingredientes": [
        { "nombre": "Harina de arroz", "ID": "HarinaArroz", "precio": 2345, "cantidad": 20 },
        { "nombre": "Trigo Sarraceno", "ID": "TrigoSarraceno", "precio": 567, "cantidad": 10 },
        { "nombre": "Polvo de hornear", "ID": "PolvoHornear", "precio": 1987, "cantidad": 15 },
        { "nombre": "Goma xantica", "ID": "GomaXantica", "precio": 2435, "cantidad": 12 },
        { "nombre": "Psyllium", "ID": "Psyllium", "precio": 789, "cantidad": 8 }
      ]
    }
  ]
}

const carritoDeCompras = [];
let precioTotalCarrito = 0;


// Actualización en tiempo real
function actualizarInfoProductoEnDOM(productoID) {
  const producto = ingredientesJSON.categoriasDeIngredientes.reduce((prev, current) => {
    return prev.concat(current.ingredientes);
  }, []).find(ingrediente => ingrediente.ID === productoID);

  if (producto) {
    document.getElementById(`cantidad${productoID}`).textContent = producto.cantidad;
  } else {
    console.error(`Producto con ID ${productoID} no encontrado en el JSON.`);
  }
}

// Agregar ingredientes
function agregarAlCarrito(ingredienteID) {
  for (const categoria of ingredientesJSON.categoriasDeIngredientes) {
    for (const ingrediente of categoria.ingredientes) {
      if (ingrediente.ID === ingredienteID) {
        if (ingrediente.cantidad > 0) {
          ingrediente.cantidad--;
          carritoDeCompras.push({ nombre: ingrediente.nombre, precio: ingrediente.precio });
          calcularTotalCarrito();
          actualizarInfoProductoEnDOM(ingredienteID); // Actualiza la cantidad en el DOM
          return `Se ha agregado ${ingrediente.nombre} al carrito.`;
        } else {
          // Alerta cuando no hay ingrediente.
          alert(`El ingrediente ${ingrediente.nombre} no está disponible.`);
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
    incrementarCantidadDisponible(ingredienteID); // Usar el ID
    carritoDeCompras.splice(index, 1);
    calcularTotalCarrito();
    actualizarInfoProductoEnDOM(ingredienteID); // Actualizar la cantidad en el DOM
    return `Se ha quitado ${ingrediente.nombre} del carrito.`;
  } else {
    return `El ingrediente con ID ${ingredienteID} no se encontró en el carrito.`;
  }
}


// Incrementar la cantidad disponible de un ingrediente en el JSON
function incrementarCantidadDisponible(ingredienteID) {
  for (const categoria of ingredientesJSON.categoriasDeIngredientes) {
    for (const ingredienteEnMatriz of categoria.ingredientes) {
      if (ingredienteID === ingredienteEnMatriz.ID) {
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

  // Actualiza el contenido del elemento con el precio total
  const cartTotalPriceElement = document.getElementById("total-carrito");
  if (cartTotalPriceElement) {
    cartTotalPriceElement.textContent = `Precio Total: $${precioTotalCarrito.toFixed(2)}`;
  }

  // Verifica si el carrito tiene elementos y muestra/oculta el enlace "Comprar"
  const comprarLink = document.getElementById("comprar-link");
  if (comprarLink) {
    if (precioTotalCarrito > 0) {
      comprarLink.style.display = "block"; // Muestra el enlace
    } else {
      comprarLink.style.display = "none"; // Oculta el enlace
    }
  }
}

