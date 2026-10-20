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
let nombreUsuario='';
//nombreUsuario = prompt("¿Cómo te llamas?");

// Pide la edad al usuario con prompt() y guárdala en 'edadUsuario'
let edadUsuario='';
//edadUsuario = prompt("¿Cuántos años tienes?");

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



let a = 20;
let b = 7;

console.log('Suma:', a + b);
console.log('Resta:', a - b);
// Completa las 3 operaciones que faltan:

// - Multiplicación (usa *)
console.log('Multiplicacion:', a * b);
// - División (usa /)
console.log('Division:', a / b);
// - Módulo (usa % — devuelve el residuo de la división)
console.log('Modulo:', a % b);



// --- ¿Qué resultado esperas? ---
console.log('5' + 3);    // 53
console.log(5 + 3);      // 8
console.log('5' - 3);    // ¿Qué pasa aquí?



let nom = "Paul";
let ed = 30;
let saludo2=`Hola ${nom}, tienes ${ed} años.`

console.log(saludo2);



// --- Calculadora de edad ---
let anioActual = 2026;
let anioNacimiento = anioActual - Number(ed);

let ciudad=prompt("En que ciudad naciste?");
let anio100=anioNacimiento+100;
let mensaje=`Hola ${nom}, naciste aproximadamente en ${anioNacimiento}, en la ciudad de ${ciudad}, cumpliras 100 el anio ${anio100}`;
console.log(mensaje);

let nuevaEdad=prompt("Ingresa edad");
let mensajeEdad = nuevaEdad >= 18
  ? "Eres mayor de edad"
  : "Eres menor de edad";

console.log(mensajeEdad);