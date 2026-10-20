console.log('¡Hola desde JavaScript!');

let nombre='Paul';
let edad=37;
let estaAprendiendo=true;
console.log(nombre);
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof estaAprendiendo);


const curso='Code 101';
console.log(curso);

const maxIntentos=10;
console.log(maxIntentos);

// --- Entrada del usuario ---
let nombreUsuario = prompt("¿Cómo te llamas?");

// Pide la edad al usuario con prompt() y guárdala en 'edadUsuario'
let edadUsuario = prompt("¿Cuántos años tienes?");

// --- Salida al usuario ---
// Muestra un alert que diga: "Hola [nombre], tienes [edad] años."
// Usa concatenación con + para unir las variables con el texto
alert("Hola " + nombreUsuario + ", tienes " + edadUsuario + " años.");

// --- Verifica en consola ---
console.log("Nombre:", nombreUsuario);

// Imprime la edad y su tipo de dato (usa typeof)
console.log("Edad:", edadUsuario);
console.log("Tipo de dato de edad:", typeof edadUsuario);

// Pregúntate: ¿por qué el tipo no es "number"?