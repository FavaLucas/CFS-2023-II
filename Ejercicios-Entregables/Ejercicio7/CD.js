"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.CD = void 0;
var CD = /** @class */ (function () {
    function CD() {
        this.canciones = [];
        this.contador = 0;
    }
    CD.prototype.agregarCancion = function (cancion) {
        this.canciones.push(cancion);
    };
    CD.prototype.eliminarNroDeCancion = function (indice) {
        console.log("Se eleminara la cancion nro:", indice);
        console.log("Listado Original");
        console.log(this.canciones);
        this.canciones.splice(indice - 1, 1);
        console.log("Listado despues de Eliminar");
        console.log(this.canciones);
    };
    CD.prototype.mostrarCancionNro = function (indice) {
        console.log("En la ubicacion:", indice, "-", this.canciones[indice - 1]);
    };
    CD.prototype.contarCaciones = function () {
        this.contador = this.canciones.length;
        return this.contador;
    };
    CD.prototype.insertarCancion = function (indice, nuevaCancion) {
        console.log("Colocaremos su nueva cancion en la posicion indicada!");
        var copiaCD = __spreadArray([], this.canciones, true);
        var copiaCD2 = __spreadArray([], this.canciones, true);
        var elementosEliminados = [];
        var elementosConservados = [];
        var posicionesABorrar = copiaCD.length - (indice - 1);
        elementosEliminados = copiaCD.splice(indice - 1, posicionesABorrar);
        // console.log(elementosEliminados);
        // console.log("----------------------");
        for (var i = 0; i < indice - 1; i++) {
            elementosConservados[i] = copiaCD2[i];
        }
        // console.log(elementosConservados);
        // console.log("----------------------");
        elementosConservados.push(nuevaCancion);
        this.canciones = elementosConservados.concat(elementosEliminados);
        console.log(this.canciones);
    };
    CD.prototype.grabarCancion = function (indice, nuevaCancion) {
        //Reemplazar la cancion existente por la que envia el usuario
        console.log("Reemplazaremos la cancion existente por la nueva, en la posicion:", indice);
        this.canciones[indice - 1] = nuevaCancion;
        console.log(this.canciones);
    };
    return CD;
}());
exports.CD = CD;
