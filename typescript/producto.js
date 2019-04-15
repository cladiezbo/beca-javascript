"use strict";
exports.__esModule = true;
var cestaDeLaCompra_1 = require("./cestaDeLaCompra");
var Producto = /** @class */ (function () {
    // public id: number;
    // public nombre: String;
    // public precio: number;
    // public fechaCaducidad: Date;
    //ponerle la visibilidad en el constructor estamos creandolo ya con su valor
    function Producto(nombre, precio, fechaCaducidad, id) {
        if (id === void 0) { id = cestaDeLaCompra_1.CestaDeLaCompra.siguienteId; }
        this.nombre = nombre;
        this.precio = precio;
        this.fechaCaducidad = fechaCaducidad;
        this.id = id;
        cestaDeLaCompra_1.CestaDeLaCompra.siguienteId++;
    }
    Producto.prototype.toString = function () {
        console.log("#" + this.id + " " + this.nombre + " (" + this.precio + "\u20AC) caduca en " + this.fechaCaducidad);
    };
    return Producto;
}());
exports.Producto = Producto;
