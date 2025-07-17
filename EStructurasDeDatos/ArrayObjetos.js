let listaDesayuno = [
    "huevos",
    "pan",
    "cafe",
]

console.log(listaDesayuno);
console.log(listaDesayuno[1]);
console.log(listaDesayuno.length); 
//legth candidad de objeto de la lista


//* push(): agregar un elemento al final del array
listaDesayuno.push("quesito")

//* pop(): eliminar el ultimo elemento

listaDesayuno.pop()
console.log(listaDesayuno);

//* unshift: agregar un elemento al inicio

listaDesayuno.unshift("fruta")
console.log(listaDesayuno);


//* modificar una poisicon de la lista 

listaDesayuno[2]= "tostadas";
console.log((listaDesayuno));


//& Objetos:

let perfil ={
    "nombre" : "daniel Zamora",
    "edad" : 20,
    "correo" : "daniel@gmail.com"
}

//! acceder a un elemento
console.log(perfil.nombre);
console.log(perfil["nombre"]);

//! modificar propiedades 

perfil.nombre = "pepito perez"
console.log(perfil.nombre);

//! agregar propiedad

perfil.pais = "colombia"
console.log(perfil);
