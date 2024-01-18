// Desafío 1
let diaSemana = prompt("¿Qué día de la semana es?");
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

// Desafío 2
let numeroUsuario = prompt("Ingresa un número:");
if (parseInt(numeroUsuario) > 0) {
    alert("El número es positivo.");
} else if (parseInt(numeroUsuario) < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero.");
}

// Desafío 3
let puntuacion = prompt("Ingresa tu puntuación en el juego:");
if (parseInt(puntuacion) >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intenta nuevamente para ganar.");
}

// Desafío 4
let saldoCuenta = 500; // Ejemplo de saldo
alert(`Tu saldo actual es: $${saldoCuenta}`);

// Desafío 5
let nombreUsuario = prompt("Ingresa tu nombre:");
alert(`¡Bienvenido/a, ${nombreUsuario}!`);
