"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransaccionEuro = void 0;
var TransaccionEuro = /** @class */ (function () {
    function TransaccionEuro(monedaEntrada, tipoTransaccion) {
        this.monedaEntrada = monedaEntrada;
        this.valorDolar = 1.07;
        this.tipoTransaccion = tipoTransaccion;
    }
    TransaccionEuro.prototype.convertirMoneda = function () {
        return this.monedaEntrada / this.valorDolar;
    };
    TransaccionEuro.prototype.getMonedaEntrada = function () {
        return this.monedaEntrada;
    };
    TransaccionEuro.prototype.getTipoTransaccion = function () {
        return this.tipoTransaccion;
    };
    TransaccionEuro.prototype.getValorTransaccion = function () {
        return this.valorTransaccion;
    };
    TransaccionEuro.prototype.setValorTransaccion = function (valor) {
        this.valorTransaccion = valor;
    };
    return TransaccionEuro;
}());
exports.TransaccionEuro = TransaccionEuro;
