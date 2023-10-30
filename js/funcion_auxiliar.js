let ingredientesJSON = {
  "categoriasDeIngredientes": [
    {
      "categoria": "Ingredientes Básicos Veganos",
      "ingredientes": [
        { "nombre": "Vegetales", "ID": "Vegetales", "precio": 2345, "cantidad": 150 },
        { "nombre": "Frutas", "ID": "Frutas", "precio": 567, "cantidad": 200 },
        { "nombre": "Cereales", "ID": "Cereales", "precio": 1987, "cantidad": 120 },
        { "nombre": "Semillas", "ID": "Semillas", "precio": 2435, "cantidad": 824 },
        { "nombre": "Frutos secos", "ID": "FrutosSecos", "precio": 789, "cantidad": 59 },
        { "nombre": "Fécula de mandioca", "ID": "FeculaMandioca", "precio": 2345, "cantidad": 25 },
        { "nombre": "Maicena", "ID": "Maicena", "precio": 987, "cantidad": 28 },
        { "nombre": "Salvado", "ID": "Salvado", "precio": 654, "cantidad": 58 },
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
        { "nombre": "Semillas de lino", "ID": "SemillasLino", "precio": 2435, "cantidad": 185 },
        { "nombre": "Semillas de chía", "ID": "SemillasChia", "precio": 789, "cantidad": 205 },
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
        { "nombre": "Psyllium", "ID": "Psyllium", "precio": 789, "cantidad": 8 }
      ]
    }
  ]
}


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

