const app = Vue.createApp({
    data() {
        return {
            clave: "",
            mostrarFormulario: true,
        };
    },
    methods: {
        verificarClave() {
            // Verifica la clave ingresada
            if (this.clave === "cmf2023") {
                // Si la clave es correcta, redirige a la siguiente página
                this.mostrarFormulario = false;
                window.location.href = "./indexAdmin.html";
            } else {
                // Si la clave es incorrecta, muestra un mensaje de error
                alert("Clave incorrecta. Vuelve a intentarlo.");
            }
        },
    },
});

app.mount("#app");
