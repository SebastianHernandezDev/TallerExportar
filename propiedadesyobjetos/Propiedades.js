let persona = {
    "primerNombre": "Ana",
    "apellido" : "Alvarado",
    "fullname": function (){
        return persona.primerNombre  + " " + persona.apellido
    },
    "edad": 80,
    "contacto": {
        "email": {
            "personal":"ana@alvarado.com",
            "trabajo" : "ana-trabajo@alvarado",
        }
        }
}
console.log(persona.primerNombre);
console.log(persona.contacto.email.personal);

console.log(persona.fullname);
console.log(persona.fullname());


console.log(typeof(persona));
console.log(typeof(persona.apellido));




