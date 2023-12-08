const { createApp } = Vue
createApp({
    data() {
        return {
            usuarios: [],
            url: 'https://aureanita2286.pythonanywhere.com/usuarios',   // si ya lo subieron a pythonanywhere
            error: false,
            cargando: true,
            isAdmin: true,
            /*atributos para el guardar los valores del formulario */
            id: 0,
            nombre: "",
            correo: "",
            nombreUsuario: "",
            password: "",
            foto: "",
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando = false;
                })
                .catch(err => {
                    console.error(err);
                    this.error = true;
                });
        },

        eliminar(id) {
            // Muestra una confirmación antes de eliminar
            const confirmacion = window.confirm('¿Estás seguro de eliminar este usuario?');

            if (!confirmacion) {
                // El usuario canceló la eliminación
                return;
            }

            const url = 'https://aureanita2286.pythonanywhere.com/usuarios/' + id;
            var options = {
                method: 'DELETE',
            }

            fetch(url, options)
                .then(res => res.text())
                .then(res => {
                    alert('Usuario Eliminado');

                    // Filtra la lista de usuarios para quitar el usuario eliminado
                    this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
                })
                .catch(error => {
                    console.error(error);
                    alert('Error al eliminar el usuario');
                });
        },

        grabar() {
            let usuario = {
                nombre: this.nombre,
                correo: this.correo,
                nombreUsuario: this.nombreUsuario,
                password: this.password,
                foto: this.foto
            }
            var options = {
                body: JSON.stringify(usuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Usuario grabado")
                    window.location.href = "./usuarios.html";  // recarga productos.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al ingresar usuario")  // puedo mostrar el error tambien
                })
        },
        login() {
            // Llama a tu API de login
            fetch('https://aureanita2286.pythonanywhere.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: 'admin', password: 'admin' }),  // Reemplaza con los valores reales
            })
                .then(response => response.json())
                .then(data => {
                    if (data.token) {
                        localStorage.setItem('token', data.token);
                        this.isAdmin = true;
                    } else {
                        alert('Credenciales inválidas');
                    }
                })
                .catch(error => console.error(error));
        },
        redirigirUsuarios() {
            console("Redirigiendo a usuarios.html"); // Agrega este alert para verificar si la función se ejecuta
            window.location.href = 'usuarios.html';
        },
    },
    created() {
        const token = localStorage.getItem('token');
        if (token) {
            this.isAdmin = true;
        }
        this.fetchData(this.url);
    },
}).mount('#app');