"use strict";
exports.__esModule = true;
exports.Matriz = void 0;
var Matriz = /** @class */ (function () {
    function Matriz(filas, columnas) {
        var matriz = new Array(filas);
        for (var i = 0; i < filas; i++) {
            matriz[i] = new Array(columnas);
        }
        for (var i = 0; i < filas; i++) {
            for (var j = 0; j < columnas; j++) {
                matriz[i][j] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            }
        }
        this.matriz = matriz;
    }
    Matriz.prototype.imprimirMatriz = function () {
        console.log("--------------------------");
        for (var i = 0; i < this.matriz.length; i++) {
            console.log(this.matriz[i].join(" | "));
        }
    };
    Matriz.prototype.getValor = function (x, y) {
        console.log("El valor en la poscion X:", x, "Y:", y, "es:", this.matriz[x][y]);
    };
    return Matriz;
}());
exports.Matriz = Matriz;
