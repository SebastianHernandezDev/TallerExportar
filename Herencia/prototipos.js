//!  PROTTIPOS

function persona(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
}

const persona1 = Object.create(persona)
persona1.nombre = "Sebastian";
 
//! dependiendo de la ambiguedad del proyercto si usa tecnologias antiguas

const persona2 = Object.create(persona)
persona2.nombre = "ana";

//! ejemplo carros

function carro(tipo,acelFrenar) {
    this.acelFrenar = acelFrenar;
    this.tipo = tipo;

}

const carro =Object.create(carro);
carro.tipo="deportivo";
carro.metodo= "arrancar"

