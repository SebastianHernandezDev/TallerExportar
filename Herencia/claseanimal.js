class animal{
    constructor(nombre,sonido){
        this.nombre = nombre;
        this.sonido = sonido
    }

    hacersonido(){
        console.log(this.nombre, "hace", this.sonido);
        
    }
}

const perrito = new animal("perrito", "guau")
perrito.hacersonido();


class perro extends animal{
    constructor(nombre, sonido, edad){
        super(nombre, sonido)
        this.edad = edad;
    }
    hacersonido(){
        console.log("los perros dicen guau");
        
    }
}

const perrito1 = new perro("marti","guau",7)