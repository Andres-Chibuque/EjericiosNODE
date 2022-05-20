const frutas=["banana","mango","pera","fresas"];

const imprimirfrutas=(frutero)=>
{
    frutero.forEach(element => {
        console.log(element)
    });
}

module.exports={
    frutero: frutas,
    imprimirfrutas
}
