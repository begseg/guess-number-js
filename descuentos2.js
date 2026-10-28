
console.log('=== Calculadora de descuentos ===');

let totalCompra = Number(prompt('Ingresa el total de la compra:'));
let descuento = 0;

if (isNaN(totalCompra)) {
    alert('⚠️ Debes ingresar un número');
} else {

    if (totalCompra > 100) {
        descuento = 20;
    } else if (totalCompra >= 50) {
        descuento = 10;
    }

    let totalFinal = totalCompra - (totalCompra * descuento / 100);

    alert(
        `Compra: S/${totalCompra}\n` +
        `Descuento: ${descuento}%\n` +
        `Total a pagar: S/${totalFinal}`
    );
}