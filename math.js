function suma (x1,x2){
    return x1+x2;
}

function resta (x1,x2){
    return x1-x2;
}


function mult (x1,x2){
    return x1*x2;
}


function div (x1,x2){
    return x1/x2;
}

//math -> libreria para adicionar meotodos (suma,resta, multipicación)
math.add=suma;
math.substract=resta;
math.multiply=mult;
math.division=div;

//expresion para EXPORTAR 
module.exports=math;