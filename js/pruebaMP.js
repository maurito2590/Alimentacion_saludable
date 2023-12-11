var valorAlmacenado = sessionStorage.getItem('preference_id');
console.log('Valor almacenado:', valorAlmacenado);

// Establecer el tiempo de sesion
var tiempoExpiracion = 10 * 60 * 1000; // 5 minutos

// Obtener el elemento HTML
var temporizadorElemento = document.getElementById('temporizador');

// Iniciar el temporizador 
actualizarTemporizador();

// Actualizar el temporizador
function actualizarTemporizador() {
  var tiempoRestante = tiempoExpiracion - (Date.now() - inicioSesion);

  // Verifico si termino
  if (tiempoRestante <= 0) {
    cerrarSesion();
  } else {
    // Convertir el tiempo restante a minutos y segundos
    var minutos = Math.floor(tiempoRestante / (60 * 1000));
    var segundos = Math.floor((tiempoRestante % (60 * 1000)) / 1000);

    // Formatear el tiempo y actualizar la interfaz de usuario
    temporizadorElemento.textContent = 'Tiempo restante: ' + minutos + 'm ' + segundos + 's';

    // Actualizar la interfaz cada segundo
    setTimeout(actualizarTemporizador, 1000);
  }
}

// Cerrar la sesion y redirigir
function cerrarSesion() {
  console.log("Sesión cerrada debido al tiempo de expiración");
  sessionStorage.removeItem('preference_id');
  alert('Tiempo expirado. Se cerrara la pagina y tendra que volver a comenzar el proceso.');
  console.log('Valor almacenado:', valorAlmacenado);
  window.close();
}

function cerrarSesionSinAlerta() {
    console.log("Sesión cerrada al hacer clic en el botón de volver");
    sessionStorage.removeItem('preference_id');
    window.close();
}

// Agregar un evento beforeunload para limpiar el sessionStorage
window.addEventListener('beforeunload', function() {
    console.log("Sesión cerrada debido al cierre de la pestaña o navegador");
    sessionStorage.removeItem('preference_id');
  });
  
  // Agregar un evento unload para garantizar la limpieza en diferentes navegadores
  window.addEventListener('unload', function() {
    console.log("Sesión cerrada definitivamente");
    sessionStorage.removeItem('preference_id');
  });

// Marcar el tiempo de inicio de la sesion
var inicioSesion = Date.now();

// Obtener el elemento HTML del botón de volver
var botonVolver = document.getElementById('botonVolver');

botonVolver.addEventListener('click', function () {
  cerrarSesionSinAlerta();
});


const mp = new MercadoPago('TEST-d12f6116-b7ce-42a3-9755-1a03d4010128');
const bricksBuilder = mp.bricks();


mp.bricks().create("wallet", "wallet_container", {
    initialization: {
        preferenceId: valorAlmacenado,
    },
 });