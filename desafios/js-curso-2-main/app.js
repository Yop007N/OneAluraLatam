
// Desafío 1
document.querySelector('h1').innerText = "Hora del Desafío";

// Desafío 2
function consoleMessage() {
    console.log("El botón fue clicado");
}

// Desafío 3
function promptMessage() {
    let ciudad = prompt("Ingrese el nombre de una ciudad de Brasil:");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

// Desafío 4
function alertMessage() {
    alert("Yo amo JS");
}

// Desafío 5
function sumNumbers() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");

    let resultado = parseFloat(num1) + parseFloat(num2);
    alert(`La suma es: ${resultado}`);
}
