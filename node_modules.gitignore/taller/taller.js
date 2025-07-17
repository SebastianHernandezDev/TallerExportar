const prompt = require("prompt-sync")();

let number = 0;
let string= "hola";
let bolean= true;
let nulo = null;
let undifined; 


let nombre = "sebastian";
let edad = 19;
let esEstudiante = true;


let sinvalor;
let valorNuelo = null;

console.log(sinvalor);
console.log(valorNuelo);


// 2 ejercicio 1
let anoActual;
let nacimiento;
let edadm;
nacimiento = prompt("dame tu fecha de naciemiento: ");
anoActual = prompt("digita el año actual: ");
edad = anoActual - nacimiento
console.log("tu edad es: ", edad);


//2 ejercicio 2
let num1;
let num2;

num1 = prompt("dame el primer numero: ");
num2 = prompt("dame el segundo numero: ");

num1 = Number(num1);
num2 = Number(num2);

let  suma = num1 + num2;
console.log("el resultado de la suma es: ",suma );

// 3 ejercicio 1

edda1 = prompt("dame tu edad: ");

if(edda1 >= 18) {
    console.log("puedes entrar");
   
} else {
    console.log("no puedes entrar");

}

// 3 ejercicio 2

