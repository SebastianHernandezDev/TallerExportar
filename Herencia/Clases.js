class Perro {
    constructor(Nombre, Raza) {
     this.nombre = nombre;
    this.raza = this.raza;
    }
    ladrar(){
        console.log("guau");
        
    }
    correr(){
        console.log("mi perrito esta corriendo");
        
    }
}

const miperrito1 = new Perro("martina", "Cocker")
const miperrito2 = new Perro("martina", "Cocker")
const miperrito3 = new Perro("martina", "Cocker")
const miperrito4 = new Perro("martina", "Cocker")

miperrito1.correr();
miperrito2.correr();
miperrito3.correr();

console.log(miperrito1.nombre);
