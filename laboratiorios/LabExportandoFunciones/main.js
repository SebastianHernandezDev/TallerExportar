import {PI,IVA,DiaSemana} from "./Constantes.js";
import {Sumar,Restar,Multiplicar,areaCirculo,CalcularTotal,AplicarDecauento,Impuestoo,aplicarDescuentoPorRol,genSuma} from "./Operacion_Matematicas.js";
import {CrearUsuario} from "./usuarios.js";
import {ROLES} from "./usuariosConstantes.js";
const AreaCir = PI * (5**2);
const PrecioIva = 100 * IVA;

console.log(AreaCir);
console.log(PrecioIva);
console.log(DiaSemana[2]);


console.log("suma = ", Sumar(10,5));
console.log("resta = ", Restar(50,32));
console.log("Multiplicar = ",Multiplicar(9,10));
console.log("Area del Cirulo = ", areaCirculo(5));

const productos = [
  { precio: 100, cantidad: 2 },
  { precio: 50, cantidad: 1 },
  { precio: 200, cantidad: 1 }
];

let totalSinImpuestos = 0;

productos.forEach(({ precio, cantidad }, index) => {
  const subtotal = CalcularTotal(precio, cantidad);
  console.log("Producto"+ (index + 1)+ precio+ "x"+ cantidad + "=" + subtotal);
  totalSinImpuestos += subtotal;
});
console.log("Total sin impuestos: "+ totalSinImpuestos+ "$.");


const totalConImpuestos = AplicarDecauento(totalSinImpuestos);
console.log("Total con impuestos (IVA): "+totalConImpuestos+"$.");


const totalFinal = AplicarDecauento(totalConImpuestos);
console.log("Total final con descuento: " + totalFinal+ "$.");

console.log()
console.log("=============================================")
console.log("Bienvenid@ a Gestión de Usuarios")
console.log("Iniciando Sistema")


let genPedro = CrearUsuario("Pedro", ROLES.ADMIN)
let genCarlos = CrearUsuario("Carlos", ROLES.CLIENTE)

console.log(genPedro)
console.log(genCarlos)

console.log("Iniciando Sistema de descuento por rol")

Impuestoo.length = 0;
console.log("Borrando registros...")
console.log("Calculando compras para", ROLES.ADMIN, "...");
while (Impuestoo.length < 4) {
        let DataPrecio = 25
        let DataCantidad = 1
        let CalcularTotal=DataPrecio * DataCantidad;
        Impuestoo.push(CalcularTotal)
        console.log("Llevamos..." + Impuestoo)
}

console.log("Total (Sin Impuestos): $", genSuma())
console.log("Total (Con Impuestos): $", (genSuma() + (genSuma()*IVA)))
console.log("Total (Con Descuento): $", ((genSuma() + (genSuma()*IVA)) - (genSuma()*aplicarDescuentoPorRol(genPedro.rol))))

Impuestoo.length = 0;
console.log("Borrando registros...")
console.log("Calculando compras para", ROLES.CLIENTE, "...")
while (Impuestoo.length < 3) {
        let DataPrecio = 50
        let DataCantidad = 1
        let CalcularTotal = DataPrecio *  DataCantidad
        Impuestoo.push(CalcularTotal)
        console.log("Llevamos..."+ Impuestoo)
}

console.log("Total (Sin Impuestos): $", genSuma())
console.log("Total (Con Impuestos): $", (genSuma() + (genSuma()*IVA)))
console.log("Total (Con Descuento): $", ((genSuma() + (genSuma()*IVA)) - (genSuma()*aplicarDescuentoPorRol(genCarlos.rol))))





