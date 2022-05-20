function saludar(nombre)
{
 console.log("Hola como estas"+ nombre);
}

function despedir(nombre){
    console.log("Vmoes"+nombre);
}


function insultar (nombre){
    console.log("te odio mucho" + nombre)
}


function realizarAccion(nombre,callback){
    callback(nombre)
}

//settime out INVESTIGAR - "Tiempo muerto"