"use strict";
exports.__esModule = true;
exports.Televisor = void 0;
var Televisor = /** @class */ (function () {
    function Televisor(canalActual, volumenActual, estaPrendido) {
        this.volumenActual = 10;
        this.estaPrendido = false;
        this.canalActual = 0;
        this.canalActual = canalActual;
        this.volumenActual = volumenActual;
        this.estaPrendido = estaPrendido;
    }
    Televisor.prototype.setCanal = function (canal) {
        this.canalActual = canal;
    };
    Televisor.prototype.imprimirCanal = function () {
        console.log(this.canalActual);
    };
    return Televisor;
}());
exports.Televisor = Televisor;
