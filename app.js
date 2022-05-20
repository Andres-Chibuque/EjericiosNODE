// REQUIRE -> expresion para Importar

//const frutas = require("./frutas");

const fs = require('fs'); //Importar librerias
const ruta="./commit.txt";
let textoleido;

//const {frutero,imprimirfruta}=require("./frutas");

//onst math=require("./math");

//console.log(frutero);
//imprimirfruta(frutas);


fs.access(ruta,fs.constants.F_OK,(err)=>{

    if(err){
        console.error("No fue posible acceder al archivo");
    }

    else{
        fs.readFile(ruta,"utf-8",(err,data)=>{
        if(err){
        console.log("Error")
        }

        else{
        console.log(data);
        textoleido=JSON.parse(data);
        console.log(textoleido.mensaje);

        }
    })
    }
});





