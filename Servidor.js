/*
//  Servidor apagado

const http=require('http');

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","texte/plain");
    res.end('Hola Mundo con Node desde un servidor')

})

//Servidor encendido (escuchando)

server.listen(3000, ()=>{

    console.log("Servidor ON en puerto 3000");
})
*/

const express=require('express');
const res = require('express/lib/response');

const app=express();


//midleware

app.use(express.json);


//rutas
app.all('/saludar',(req,res)=>{
    console.log("La peticopn paso por la ruta all")
    next();
})



app.get('/',(req,res)=>{

    res.send("Holaa mundoss")
  
  })

  app.post('/',(req,res)=>{

    console.log("Post funcionando en la ruta raiz")

    res.send({nombre: "Andres", Apellido:"Agudelo"})
  })
  
  app.put('/',(req,res)=>{

    console.log("Put funcionando en la ruta raiz")

    res.send({nombre: "Andres", Apellido:"Agudelo"})
  })
  app.delete('/',(req,res)=>{

    console.log("Delete funcionando en la ruta raiz")

    res.send({nombre: "Andres", Apellido:"Agudelo"})
  })




app.get('/saludar',(req,res)=>{

    res.json({Nombre:"Soy el get"})
})


app.post('/saludar',(req,res)=>{

    res.json({Nombre:"Soy el post"})
})

//Poner a escuchar el servidor
app.listen(3000, ()=>
{
    console.log("Servidor ON en el puerto 3000");
})






