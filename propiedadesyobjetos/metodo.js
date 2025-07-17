//! metodos. funcion asociada a un objeto

let carro = {
    marca: "chevrolet",
    arrancar: function(){
        console.log("mi carro esta acelerando");
        
    }

}

carro.arrancar();


//! OTRO OBJETO

let gamer1 ={
    nombre:"Majo",
    Navel: 80,
}
  

let gamer2 ={
    nombre:"Majo",
    Navel: 80,
}

//& funcion constructora de objetos
function gamers(nombre,nivel){
    this.nombre = nombre;
    this.nivel = nivel;
}
let gamer4 = new gamers("Majo",80)
let gamer5 = new gamers("samu",80)
let gamer6 = new gamers("cami",80)
let gamer7 = new gamers("jp",80)


function libro (titulo,autor,año){
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    
}

let libro1 = new libro("el coronel no tiene quien le escriba", "gabriel garcia", 2025)
console.log(libro1);


//! cuenta bancaria
let CuentaBancaria {
    titular ="pepito",
    saldo = 100 
}

function depositar(monto){
    this.saldo = saldo +=monto
    console.log("su saldo es: ", this.saldo,"señor: ", titular);
    
}

function retirar(monto){
    if (monto < 0) 
        console.log("saldos insuficientes para retirar")
    } else  {
        this.saldo = saldo -= monto 
}