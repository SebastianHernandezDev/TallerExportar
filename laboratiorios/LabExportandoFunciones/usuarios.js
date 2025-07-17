export function CrearUsuario(nombre,Rol){
    let Fecha = new Date();
    let user = {
        "nombre": nombre,
        "rol": Rol,
        "fecha": Fecha.toLocaleDateString('es-ES')
    }
    return   user;
}
