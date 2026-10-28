/* console.log('¡Hola desde JavaScript!');

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

console.log(mensajeEdad); */

// === ADIVINA EL NÚMERO ===
// El programa genera un número secreto entre 1 y 100
// El jugador intenta adivinarlo

console.log('=== Adivina el Número ===');
// --- Generar número secreto ---
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Temporal: ver el número para probar (lo quitaremos después)
console.log('(DEBUG) Número secreto:', numeroSecreto);
// --- Pedir intento al jugador ---
let intento = prompt('Adivina el número (1-100):');
intento = Number(intento);


// --- Validar entrada ---
if (isNaN(intento)) {
  alert('⚠️ Eso no es un número. Por favor ingresa un número del 1 al 100.');
} else if (intento < 1 || intento > 100) {
  alert('⚠️ El número debe estar entre 1 y 100.');
} else if (intento === numeroSecreto) {
  alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
} else if (intento > numeroSecreto) {
  alert('📈 Muy alto. Intenta un número más bajo.');
} else {
  alert('📉 Muy bajo. Intenta un número más alto.');
}


console.log('Intento del jugador:', intento);
console.log('Tipo:', typeof intento);
// --- Comparar intento con número secreto ---
/* if (intento === numeroSecreto) {
  alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
} else {
  alert('❌ Incorrecto. El número era ' + numeroSecreto);
} */

  // --- Pistas alto/bajo/correcto ---
if (intento === numeroSecreto) {
  alert('🎉 ¡Correcto! El número era ' + numeroSecreto);
  console.log('Resultado: ¡GANÓ!');
} else if (intento > numeroSecreto) {
  alert('📈 Muy alto. Intenta un número más bajo.');
  console.log('Resultado: muy alto');
} else {
  alert('📉 Muy bajo. Intenta un número más alto.');
  console.log('Resultado: muy bajo');
}

// --- Segundo intento ---
/* if (intento !== numeroSecreto) {
  let intento2 = prompt('Intenta de nuevo (1-100):');
  intento2 = Number(intento2);

  if (intento2 === numeroSecreto) {
    alert('🎉 ¡Correcto en el segundo intento!');
  } else if (intento2 > numeroSecreto) {
    alert('📈 Muy alto. El número era ' + numeroSecreto);
  } else {
    alert('📉 Muy bajo. El número era ' + numeroSecreto);
  }
} */

// --- Pista de cercanía ---
let diferencia = Math.abs(intento - numeroSecreto);
let cercanía = diferencia <= 10 ? '🔥 ¡Estás cerca!' : '❄️ Estás lejos';
console.log(cercanía);

// --- Segundo intento (si no acertó) ---
if (!isNaN(intento) && intento >= 1 && intento <= 100 && intento !== numeroSecreto) {
  let intento2 = prompt('Intenta de nuevo (1-100):');
  intento2 = Number(intento2);

  if (isNaN(intento2) || intento2 < 1 || intento2 > 100) {
    alert('⚠️ Entrada inválida. El número era ' + numeroSecreto);
  } else if (intento2 === numeroSecreto) {
    alert('🎉 ¡Correcto en el segundo intento! El número era ' + numeroSecreto);
  } else {
    let pista = intento2 > numeroSecreto ? 'alto' : 'bajo';
    alert(`Muy ${pista}. El número era ${numeroSecreto}`);
  }
}

// AND (&&): ambas deben ser true
let edad = 25;
let tieneLicencia = true;
console.log(edad >= 18 && tieneLicencia);  // true

// OR (||): al menos una debe ser true
let esFeriado = false;
let esDomingo = true;
console.log(esFeriado || esDomingo);  // true (domingo es true)

// NOT (!): invierte el valor
let lloviendo = false;
console.log(!lloviendo);  // true (NO está lloviendo)



