document.addEventListener("DOMContentLoaded", function () {
    // Elementos del DOM
    const h1Element = document.querySelector('h1');
    const parrafoElement = document.querySelector('.texto__parrafo');
    const inputElement = document.querySelector('.container__input');
    const intentarButton = document.querySelector('.container__boton');
    const reiniciarButton = document.getElementById('reiniciar');

    // Número secreto aleatorio entre 1 y 10
    let numeroSecreto = generarNumeroSecreto();

    // Contador de intentos
    let intentos = 0;
    const intentosMaximos = 3;

    // Desafío 1
    h1Element.innerText = "Hora del Desafío";

    // Desafío 2 - Detectar la tecla Enter para realizar un intento
    inputElement.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            realizarIntento();
        }
    });

    // Desafío 2 - Al hacer clic en el botón "Intentar"
    intentarButton.addEventListener('click', function () {
        realizarIntento();
    });

    // Desafío 3
    reiniciarButton.addEventListener('click', function () {
        reiniciarJuego();
    });

    // Función para reiniciar el juego
    function reiniciarJuego() {
        numeroSecreto = generarNumeroSecreto();
        intentos = 0;
        ocultarMensaje();
        inputElement.value = "";
        habilitarBoton(intentarButton);
        deshabilitarBoton(reiniciarButton);
    }

    // Función para realizar un intento
    function realizarIntento() {
        intentos++;
        const numeroUsuario = parseInt(inputElement.value);

        if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
            mostrarMensaje("Ingresa un número válido entre 1 y 10.");
        } else {
            if (numeroUsuario === numeroSecreto) {
                mostrarMensaje(`¡Correcto! Adivinaste el número secreto en ${intentos} intentos.`);
                deshabilitarBoton(intentarButton);
                habilitarBoton(reiniciarButton);
            } else {
                let pista = numeroUsuario < numeroSecreto ? "El número es mayor." : "El número es menor.";
                mostrarMensaje(`Número incorrecto. ${pista} ¡Inténtalo de nuevo!`);
                if (intentos === intentosMaximos) {
                    mostrarMensaje("Llegaste al número máximo de intentos. El número secreto era " + numeroSecreto + ".");
                    deshabilitarBoton(intentarButton);
                    habilitarBoton(reiniciarButton);
                }
            }
        }
    }

    // Función para generar un número secreto aleatorio entre 1 y 10
    function generarNumeroSecreto() {
        return Math.floor(Math.random() * 10) + 1;
    }

    // Funciones auxiliares
    function mostrarMensaje(mensaje) {
        parrafoElement.innerText = mensaje;
    }

    function ocultarMensaje() {
        parrafoElement.innerText = "";
    }

    function habilitarBoton(boton) {
        boton.removeAttribute('disabled');
    }

    function deshabilitarBoton(boton) {
        boton.setAttribute('disabled', 'true');
    }
});
