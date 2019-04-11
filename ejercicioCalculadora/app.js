

//var resultadoSuma = suma(1,2,6);
function suma(){
    var suma= 0;
    for(let i=0;i<arguments.length;i++){
        suma+=arguments[i];
    }
    return suma;
}
//console.log(resultadoSuma);

var variableGlobal = 0;
sumaComoCalculadora(1,2,6);
function sumaComoCalculadora(primero, segundo){
    console.log(variableGlobal)
    variableGlobal=primero;
    console.log(variableGlobal)
    for(let i=1; i<arguments.length; i++){
        variableGlobal = suma(variableGlobal,arguments[i])
        console.log(variableGlobal)
        
    }
    return variableGlobal;
}
//var resultadoResta = resta(10,8);
function resta(){
    var resta= 0;
    for(let i=0;i<arguments.length;i++){
        resta-=arguments[i];
    }
    return resta;
}
//console.log(resultadoResta);

//var resultadoMult = multiplicar(4,2,6);
function multiplicar(){
    var mult= 1;
    for(let i=0;i<arguments.length;i++){
        mult*=arguments[i];
    }
    return mult;
}
//console.log(resultadoMult);

//var resultadoDiv = division(88,1,6);
function division(){
    var dividir= 1;
    for(let i=0;i<arguments.length;i++){
        if (arguments[i]== 0) {
            return undefined;
        } else {
            dividir/=arguments[i];
        }
    }
    return dividir;
}
//console.log(resultadoDiv);