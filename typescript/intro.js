var nombre = "Claudia";
nombre = "4";
console.log("me llamo " + nombre);
//varios tipos
var variosTipos = true;
variosTipos = 3;
var otrosTiposVarios;
otrosTiposVarios = false;
//sin inicializar y sin tipo coge como tipo any
var esVerdad;
var apellido = "Diez";
console.log("Me llamo: " + nombre + " " + apellido);
//Desestructuracion
var serie = {
    titulo: " mi serie",
    vista: false
};
var personajes = ["Nury", "Carlos", "yo"];
var titulo = serie.titulo, vista = serie.vista;
var mama = personajes[0], papa = personajes[1];
var num = 1;
switch (num) {
    case 1:
        console.log("Es 1");
        break;
    case 2:
        console.log("");
        break;
    default:
        console.log("Es otro");
}
for (var i = 0; i < personajes.length; i++) {
    console.log(personajes[i]);
}
for (var i_1 in personajes) {
    console.log(i_1 + ": " + personajes[i_1]);
}
for (var _i = 0, personajes_1 = personajes; _i < personajes_1.length; _i++) {
    var val = personajes_1[_i];
    //en val se guarda el valor
    console.log(val);
}
personajes.forEach(function (val, pos) {
    console.log(val);
});
// funciones flechas
personajes.forEach(function (val, pos) {
    console.log(val);
});
var index1 = 1;
while (index1 < 3) {
    console.log("Hola a todos");
    index1++;
}
//esto crea un arreglo nums que no especifica la cantidad de elementos que tinen que ser
function getNumeroloteria() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums
        .sort(function (a, b) {
        return a - b;
    })
        .join(",");
}
console.log(getNumeroloteria(5, 12, 2, 5, 44, 36));
function esPar(n) {
    return n % 2 === 0;
}
var numPares = [1, 2, 3, 4, 5].filter(esPar);
console.log(numPares);
