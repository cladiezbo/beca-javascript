var nombre: string = "Claudia";
nombre = "4";
console.log("me llamo "+ nombre);

//varios tipos
var variosTipos: number | boolean = true;
variosTipos = 3;

//alias
type numBool = number|boolean;
var otrosTiposVarios: numBool;
otrosTiposVarios = false

//sin inicializar y sin tipo coge como tipo any
var esVerdad;

var apellido = "Diez";
console.log(`Me llamo: ${nombre} ${apellido}`);
//Desestructuracion
var serie = {
    titulo:" mi serie",
    vista: false
}
var personajes = ["Nury", "Carlos", "yo"];
var {titulo, vista} = serie;
var [mama, papa]= personajes
var num = 1;
switch(num){
    case 1:
    console.log("Es 1")
    break;
    case 2:
    console.log("")
    break;
    default:
    console.log("Es otro");
}
for(var i= 0; i<personajes.length;i++){
    console.log(personajes[i]);
}
for(let i in personajes){
    console.log(`${i}: ${personajes[i]}`)
}
for(let val of personajes){
    //en val se guarda el valor
    console.log(val)
}
personajes.forEach(function(val, pos){
    console.log(val);
})

// funciones flechas
personajes.forEach((val, pos)=>{
    console.log(val);
})
var index1 = 1;
while(index1<3){
    console.log("Hola a todos")
    index1++;
}
//esto crea un arreglo nums que no especifica la cantidad de elementos que tinen que ser
function getNumeroloteria(...nums: Array<number>):
string{
    return nums
    .sort(function(a,b){
        return a-b;
    })
    .join(",");
}
console.log(getNumeroloteria(5,12,2,5,44,36));

function esPar(n){
    return n%2 === 0;
}
let numPares = [1,2,3,4,5].filter(esPar);
console.log(numPares)
