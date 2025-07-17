import validator from 'validator';
import promptSync from 'prompt-sync';
const prompt = promptSync();
let tuCorreo = " ";

while (!validator.isEmail(tuCorreo)){ /// ! niega la validacion 
    tuCorreo = prompt("digita un correo valido: ")
}


console.log("Gracias!!!");
