"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransaccionEuro = void 0;
var TransaccionEuro = /** @class */ (function () {
    function TransaccionEuro(monedaEntrada) {
        this.monedaEntrada = monedaEntrada;
        this.valorDolar = 1.07;
    }
    TransaccionEuro.prototype.convertirMoneda = function () {
        return this.monedaEntrada / this.valorDolar;
    };
    return TransaccionEuro;
}());
exports.TransaccionEuro = TransaccionEuro;
