"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Practico 4 - POO - Ejercicio Fuera de Clase 2 - Matriz
var rls = require("readline-sync");
var Matriz = /** @class */ (function () {
    function Matriz(otraMatriz) {
        this.matriz = otraMatriz;
    }
    Matriz.prototype.mostrarValor = function (f, c) {
        console.log("Entró a mostrarValor()");
        console.log(this.matriz[f][c]);
    };
    return Matriz;
}());
function creaMatriz() {
    var filas = rls.question("Ingrese filas: ");
    var columnas = rls.question("Ingrese columnas: ");
    var matriz = new Array(filas);
    for (var k = 0; k < filas; k++) {
        matriz[k] = new Array(columnas);
    }
    for (var i = 0; i < filas; i++) {
        for (var j = 0; j < columnas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10);
        }
    }
    console.log(matriz);
    return matriz;
}
var matrizCargada = creaMatriz();
var matriz1 = new Matriz(matrizCargada);
console.log("Ingrese fila y columna del valor que desea ver:");
var x = rls.question();
var y = rls.question();
matriz1.mostrarValor(x, y);
