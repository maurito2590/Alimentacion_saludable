const ingredientesJSON = {
  "categoriasDeIngredientes": [
    {
      "categoria": "Ingredientes Básicos Veganos",
      "ingredientes": [
        { "nombre": "Vegetales", "ID": "Vegetales", "precio": 650, "cantidad": 150 },
        { "nombre": "Frutas", "ID": "Frutas", "precio": 560, "cantidad": 200 },
        { "nombre": "Cereales", "ID": "Cereales", "precio": 1250, "cantidad": 120 },
        { "nombre": "Semillas", "ID": "Semillas", "precio": 1399, "cantidad": 824 },
        { "nombre": "Frutos secos", "ID": "FrutosSecos", "precio": 1150, "cantidad": 59 },
        { "nombre": "Fecula mandioca", "ID": "FeculaMandioca", "precio": 1100, "cantidad": 25 },
        { "nombre": "Maicena", "ID": "Maicena", "precio": 450, "cantidad": 28 },
        { "nombre": "Salvado", "ID": "Salvado", "precio": 800, "cantidad": 58 },
        { "nombre": "Manteca cacao", "ID": "MantecaCacao", "precio": 920, "cantidad": 30 },
        { "nombre": "Manteca de Almendras", "ID": "MantecaAlmendras", "precio": 1740, "cantidad": 22 },
        { "nombre": "Manteca de maní", "ID": "MantecaMani", "precio": 900, "cantidad": 16 },
        { "nombre": "Manteca vegana", "ID": "MantecaVegana", "precio": 2350, "cantidad": 18 },
        { "nombre": "Goma xantana", "ID": "GomaXantana", "precio": 1620, "cantidad": 30 },
        { "nombre": "Hierbas", "ID": "Hierbas", "precio": 700, "cantidad": 25 },
        { "nombre": "Mayonesa vegana", "ID": "MayonesaVegana", "precio": 490, "cantidad": 10 },
        { "nombre": "Levadura de cerveza", "ID": "LevaduraCerveza", "precio": 210, "cantidad": 12 },
        { "nombre": "Leche arroz", "ID": "LecheArroz", "precio": 1700, "cantidad": 8 },
        { "nombre": "Leche almendra", "ID": "LecheAlmendra" , "precio": 2400, "cantidad": 10 },
        { "nombre": "Leche avena", "ID": "LecheAvena", "precio": 1500, "cantidad": 15 },
        { "nombre": "Leche soja", "ID": "LecheSoja", "precio": 1500, "cantidad": 10 },
        { "nombre": "Leche cañamo", "ID": "LecheCanamo", "precio": 1950, "cantidad": 5 },
        { "nombre": "Leche coco", "ID": "LecheCoco", "precio": 1150, "cantidad": 20 },
      ]
    },
    {
      "categoria": "Ingredientes para simular el sabor de la proteína animal",
      "ingredientes": [
        { "nombre": "Pimenton ahumado", "ID": "PimentonAhumado", "precio": 1320, "cantidad": 10 },
        { "nombre": "Alga nori", "ID": "AlgaNori", "precio": 2350, "cantidad": 15 },
        { "nombre": "Tofu", "ID": "Tofu", "precio": 1710, "cantidad": 20 }
      ]
    },
    {
      "categoria": "Repostería",
      "ingredientes": [
        { "nombre": "Sustitutos huevo", "ID": "SustitutosHuevo", "precio": 2650, "cantidad": 12 },
        { "nombre": "Semillas lino", "ID": "SemillasLino", "precio": 650, "cantidad": 185 },
        { "nombre": "Semillas chía", "ID": "SemillasChia", "precio": 700, "cantidad": 205 },
        { "nombre": "Aceite coco", "ID": "AceiteCoco", "precio": 1560, "cantidad": 25 },
        { "nombre": "Néctar agave", "ID": "NectarAgave", "precio": 2120, "cantidad": 15 },
        { "nombre": "Sirope arce", "ID": "SiropeArce", "precio": 2400, "cantidad": 20 },
        { "nombre": "Melaza residual", "ID": "MelazaResidual", "precio": 1300, "cantidad": 25 },
        { "nombre": "Masas hojaldres", "ID": "MasasHojaldres", "precio": 2500, "cantidad": 10 }
      ]
    },
    {
      "categoria": "Celiacos",
      "ingredientes": [
        { "nombre": "Harina arroz", "ID": "HarinaArroz", "precio": 800, "cantidad": 20 },
        { "nombre": "Trigo Sarraceno", "ID": "TrigoSarraceno", "precio": 950, "cantidad": 10 },
        { "nombre": "Polvo hornear", "ID": "PolvoHornear", "precio": 300, "cantidad": 15 },
        { "nombre": "Psyllium", "ID": "Psyllium", "precio": 1220, "cantidad": 8 }
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


function actualizarBoton(ingredienteID) {
  const boton = document.getElementById(`btn-${ingredienteID}`);
  
  if (boton) {
    const ingredienteEnCarrito = carritoDeCompras.filter((item) => item.nombre.toLowerCase().replace(/\s/g, '') === ingredienteID.toLowerCase().replace(/\s/g, ''));
    
    if (ingredienteEnCarrito.length > 0) {
      boton.textContent = `Agregado: ${ingredienteEnCarrito.length}`;
      // Agregar la clase 'colorear'
      boton.classList.add('colorear');
    } else {
      boton.textContent = "Agregar al carrito";
      // Si el botón no está en la condición 'Agregado', eliminamos la clase 'colorear'
      boton.classList.remove('colorear');
    }
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
          actualizarBoton(ingredienteID);
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
  const index = carritoDeCompras.findIndex(ingrediente => {
    // Convertir ambas cadenas y eliminar espacios en blanco
    const nombreIngrediente = ingrediente.nombre.toLowerCase().replace(/\s/g, '');
    const ingredienteIDLimpiado = ingredienteID.toLowerCase().replace(/\s/g, '');
    return nombreIngrediente === ingredienteIDLimpiado;
  });

  if (index !== -1) {
    const ingrediente = carritoDeCompras[index];
    incrementarCantidadDisponible(ingredienteID); // Usar el ID
    carritoDeCompras.splice(index, 1);
    calcularTotalCarrito();
    actualizarBoton(ingredienteID);
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
      console.log(carritoDeCompras)
    } else {
      comprarLink.style.display = "none"; // Oculta el enlace
    }
  }
}