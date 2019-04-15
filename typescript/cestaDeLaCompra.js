"use strict";
exports.__esModule = true;
var CestaDeLaCompra = /** @class */ (function () {
    function CestaDeLaCompra(lista) {
        if (lista === void 0) { lista = []; }
        this.lista = lista;
    }
    CestaDeLaCompra.prototype.addProducto = function (nuevoProducto) {
        this.lista.push(nuevoProducto);
    };
    CestaDeLaCompra.siguienteId = 2;
    return CestaDeLaCompra;
}());
exports.CestaDeLaCompra = CestaDeLaCompra;
