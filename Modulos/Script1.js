import { useImperativeHandle } from "react";

var mensaje = "hola"
var mensaje = "hola a todxs"

console.log(mensaje);

let mensaje1 = "hola";
let mensaje2 = "hola toxs"


//? tipo de exportaciones
// function calcularIVA(precio){
//     return precio *0.15;
// }

//===============================//

export function sumar(a,b){
    return a+b;
}

export const IVA = 0.15;


export function calcularPrecioConIVA(precio){
  return precio * (1 + IVA)
}