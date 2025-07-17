let db = [];

export function guardarUsuario(nombre){
  db.push(nombre);

}
export function traemeTodos(){
    return db;
    
}
guardarUsuario("andres")
console.log(traemeTodos());

db = "Ana";

