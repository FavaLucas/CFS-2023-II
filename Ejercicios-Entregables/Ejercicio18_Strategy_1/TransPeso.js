"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransaccionPeso = void 0;
var TransaccionPeso = /** @class */ (function () {
    function TransaccionPeso(monedaEntrada) {
        this.monedaEntrada = monedaEntrada;
        this.valorDolar = 730;
    }
    TransaccionPeso.prototype.convertirMoneda = function () {
        return this.monedaEntrada / this.valorDolar;
    };
    return TransaccionPeso;
}());
exports.TransaccionPeso = TransaccionPeso;
