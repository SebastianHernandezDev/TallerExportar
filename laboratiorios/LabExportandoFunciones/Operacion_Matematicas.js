import {PI,Descuento, IVA} from "./Constantes.js";
import { ROLES } from './usuariosConstantes.js'


export function Sumar(a,b){
    return a + b ;
}
export function Restar(a,b){
    return a - b;
}
export function Multiplicar(a,b){
    return a * b
}
export function areaCirculo(Radio){
    return PI * (Radio ** 2);
}
export function CalcularTotal(precio,cantidad){
    return precio * cantidad
}
export function AplicarImpuestos(total){
    return total + (total *IVA);
}
export function AplicarDecauento(total){
    return total - (total * Descuento);
}

export function aplicarDescuentoPorRol(usuario) {
    if (usuario == ROLES.ADMIN) {
        let DESCUENTOADMIN = 0.20;
        return DESCUENTOADMIN;
    } else if (usuario == ROLES.CLIENTE) {
        return Descuento;
    } else {
        return 0;
    }
}
export function genSuma() {
    let genTotalSuma = 0;
    for (let i = 0; i < Impuestoo.length; i++) {
        genTotalSuma +=Impuestoo[i]
    }
    return genTotalSuma;
}
export const Impuestoo = []
