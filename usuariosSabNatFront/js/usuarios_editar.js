console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        id:null,
        nombre:"", 
        correo:"",
        nombreUsuario:"",
        password:"",
        foto:"",
        url:'https://aureanita2286.pythonanywhere.com/usuarios'+'/'+id,
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.id = data.id;
                    this.nombre = data.nombre;
                    this.correo = data.correo;
                    this.nombreUsuario = data.nombreUsuario;
                    this.password = data.password;
                    this.foto = data.foto;
                })
                .catch(err => {
                    console.error(err);
                    this.error = true;
                });
        },
        
        modificar() {
            let usuario = {
                id: this.id,
                nombre: this.nombre,
                correo: this.correo,
                nombreUsuario: this.nombreUsuario,
                password: this.password,
                foto: this.foto
            };
        
            var options = {
                body: JSON.stringify(usuario),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            };
        
            fetch(this.url, options)
                .then(() => {
                    alert("Registro modificado");
                    window.location.href = "./usuarios.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar");
                });
        }
    },        
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')