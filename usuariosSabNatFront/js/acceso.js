document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginBtn').addEventListener('click', function () {
        var passwordInput = document.getElementById('password').value;

        if (passwordInput === 'admin' && confirm('¿Estás seguro de iniciar sesión?')) {
            redirigirUsuarios();
        } else {
            alert('Contraseña incorrecta. Intenta de nuevo.');
        }
    });
});

function redirigirUsuarios() {
    // Puedes agregar más lógica si es necesario
    window.location.href = 'usuariosAdmin.html';
}
