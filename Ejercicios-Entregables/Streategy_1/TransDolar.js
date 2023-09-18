"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransaccionDolar = void 0;
var TransaccionDolar = /** @class */ (function () {
    function TransaccionDolar(monedaEntrada, tipoTransaccion) {
        this.monedaEntrada = monedaEntrada;
        this.valorDolar = 1;
        this.tipoTransaccion = tipoTransaccion;
    }
    TransaccionDolar.prototype.convertirMoneda = function () {
        return this.monedaEntrada;
    };
    TransaccionDolar.prototype.getMonedaEntrada = function () {
        return this.monedaEntrada;
    };
    TransaccionDolar.prototype.getTipoTransaccion = function () {
        return this.tipoTransaccion;
    };
    TransaccionDolar.prototype.getValorTransaccion = function () {
        return this.valorTransaccion;
    };
    TransaccionDolar.prototype.setValorTransaccion = function (valor) {
        this.valorTransaccion = valor;
    };
    return TransaccionDolar;
}());
exports.TransaccionDolar = TransaccionDolar;
