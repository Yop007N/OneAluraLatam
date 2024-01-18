// Desafío 1
console.log("¡Bienvenido al programa!");

// Desafío 2
let nombre = "TuNombre";
console.log(`¡Hola, ${nombre}!`);

// Desafío 3
nombre = prompt("¿Cuál es tu nombre?");
alert(`¡Hola, ${nombre}!`);

// Desafío 4
let valor1 = 5;
let valor2 = 3;
let resultadoSuma = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultadoSuma}.`);

// Desafío 5
let resultadoResta = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultadoResta}.`);

// Desafío 6
let edad = prompt("Ingresa tu edad:");
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Desafío 7
let numero = prompt("Ingresa un número:");
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

// Desafío 8
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Desafío 9
let nota = 8;
if (nota >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

// Desafío 10
let numeroAleatorio = Math.random();
console.log(`Número aleatorio: ${numeroAleatorio}`);

// Desafío 11
let numeroEnteroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log(`Número entero aleatorio entre 1 y 10: ${numeroEnteroAleatorio}`);

// Desafío 12
let numeroEnteroAleatorio2 = Math.floor(Math.random() * 1000) + 1;
console.log(`Número entero aleatorio entre 1 y 1000: ${numeroEnteroAleatorio2}`);
