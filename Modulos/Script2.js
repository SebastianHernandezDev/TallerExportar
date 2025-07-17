import { sumar,calcularPrecioConIVA } from './Script1.js'
//const total = calcularIVA(100)
//? de donde viene claculada


console.log("Suma:", sumar(1,2));
const preciProducto = 100;
const resultIVA = calcularPrecioConIVA(preciProducto)

console.log("el precio con iva es:", resultIVA);
