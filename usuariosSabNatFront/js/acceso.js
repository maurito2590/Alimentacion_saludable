function redirigirUsuarios() {
    // Aquí deberías tener tu lógica para verificar la contraseña

    // Simulación de una contraseña correcta
    const contrasenaCorrecta = true;

    if (contrasenaCorrecta) {
        // Actualiza la propiedad isAdmin de Vue
        app.isAdmin = true;
        window.location.href = '/usuariosAdmin.html';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginBtn').addEventListener('click', function () {
        if (confirm('¿Estás seguro de iniciar sesión?')) {
            redirigirUsuarios();
        }
    });
});
