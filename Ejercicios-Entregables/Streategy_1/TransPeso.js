"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransaccionPeso = void 0;
var TransaccionPeso = /** @class */ (function () {
    function TransaccionPeso(monedaEntrada, tipoTransaccion) {
        this.monedaEntrada = monedaEntrada;
        this.valorDolar = 730;
        this.tipoTransaccion = tipoTransaccion;
    }
    TransaccionPeso.prototype.convertirMoneda = function () {
        return this.monedaEntrada / this.valorDolar;
    };
    TransaccionPeso.prototype.getMonedaEntrada = function () {
        return this.monedaEntrada;
    };
    TransaccionPeso.prototype.getTipoTransaccion = function () {
        return this.tipoTransaccion;
    };
    TransaccionPeso.prototype.getValorTransaccion = function () {
        return this.valorTransaccion;
    };
    TransaccionPeso.prototype.setValorTransaccion = function (valor) {
        this.valorTransaccion = valor;
    };
    return TransaccionPeso;
}());
exports.TransaccionPeso = TransaccionPeso;
