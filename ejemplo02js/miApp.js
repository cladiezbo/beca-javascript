miFuncionConVar()
console.log("Hola mundo")
miFuncionConLet()
variablesGlobales = "variableGlobal";
var iralBarVG = "otra variable global";

function miFuncionConVar(){
    var otraVariable = "esto es una variable local"
    for(var i=0;i<10;i++){
        console.log("mostrar el valor de i"+i)
    }
   console.log("el valor final de i"+i)
}
function miFuncionConLet(){
    var otraVariable = "esto es una variable local"
    for(let i=0;i<10;i++){
        console.log("mostrar el valor de i"+i)
    }
    //esto no funciona porque el tipo let no existe solo que en el ciclo
   //console.log("el valor final de i"+i)
}
console.log("evaluando tipos de datos")
var tipoDeDatoNumerico = 7;
var tipoDeDatoCadena = "cadena de oro";
var fechaDeEstreno = new Date();
var otraFechaDeEstreno = fechaDeEstreno;
otraFechaDeEstreno.setFullYear(1999);
console.log("fecha final "+ otraFechaDeEstreno.getFullYear() );
console.log("fecha final "+ fechaDeEstreno.getFullYear() );
cambiarFecha(fechaDeEstreno);

function cambiarFecha(fecha){
    fecha.setFullYear(1990);
    console.log("fecha definida "+ fecha.getFullYear());
}
console.log("resultado de typeof numerico: "+typeof tipoDeDatoCadena)
console.log("resultado de typeof numerico: "+typeof tipoDeDatoNumerico)
console.log("resultado de typeof numerico: "+typeof fechaDeEstreno)
pruebaNumerico()

function pruebaNumerico(){
    let numero = new Number(3.24121);
    console.log("valor almacenado "+ numero.valueOf());
    console.log("valor almacenado "+ numero.toFixed());
    console.log("valor almacenado "+ numero.toFixed(4));
}
vamosALosMetodos(1,2);
vamosALosMetodos(1);
vamosALosMetodos(1,2,3,4,5,6,7,8,9);
function vamosALosMetodos(campo1, campo2){
    console.log("cantidad de args recibidos: "+ arguments.length);
    console.log("argumentos esperados: "+ arguments.callee.length);
}
arrays();
function arrays(){
    let miArray = new Array();
    miArray[0] = 7;
    miArray[1] = "otra cosa";
    miArray[miArray.length-1];
    let otroArray = [1,2, "otro", new Date()];
    let miArrayAsociativo= new Array();
    miArrayAsociativo['unaClave'] = "un valor";
    let persona = new Array();
    persona.nombre = "Ruben";
    persona.apellido1 = "Gomez";
    persona.argumentos = vamosALosMetodos;
    persona.argumentos(1,231,123,12,3,1);
    console.log("datos personales: nombre "+ persona.nombre + " primer apellido "+ persona.apellido1);
}
function miClase (campo1, campo2){
    this.clave1 =campo1;
    this.clave2 =campo2;
    
    //this.concatena= function(){
      //  return this.clave1 + this.clave2
   // }
}
miClase.prototype.concatena = function(){
    return this.clave1 + this.clave2
}
var miObjeto = new miClase("primero ", "segundo");
console.log(miObjeto.concatena());
