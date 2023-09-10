"use strict";
exports.__esModule = true;
exports.JuegoDeCasino = void 0;
var JuegoDeCasino = /** @class */ (function () {
    function JuegoDeCasino(nombreJuego, apuestaMinima) {
        this.nombreJuego = nombreJuego;
        this.apuestaMinima = apuestaMinima;
    }
    JuegoDeCasino.prototype.getNombreJuego = function () {
        return this.nombreJuego;
    };
    JuegoDeCasino.prototype.getApuestaMinima = function () {
        return this.apuestaMinima;
    };
    return JuegoDeCasino;
}());
exports.JuegoDeCasino = JuegoDeCasino;
