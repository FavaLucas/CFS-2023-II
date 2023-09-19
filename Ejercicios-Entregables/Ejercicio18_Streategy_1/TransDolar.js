"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransaccionDolar = void 0;
var TransaccionDolar = /** @class */ (function () {
    function TransaccionDolar(monedaEntrada) {
        this.monedaEntrada = monedaEntrada;
        this.valorDolar = 1;
    }
    TransaccionDolar.prototype.convertirMoneda = function () {
        return this.monedaEntrada / this.valorDolar;
    };
    return TransaccionDolar;
}());
exports.TransaccionDolar = TransaccionDolar;
