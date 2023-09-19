"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaccion = void 0;
var Transaccion = /** @class */ (function () {
    function Transaccion(tipoTran, monto) {
        this.tipoTran = tipoTran;
        this.monto = monto;
    }
    Transaccion.prototype.getTipoTran = function () {
        return this.tipoTran;
    };
    Transaccion.prototype.setTipoTran = function (tipoTran) {
        this.tipoTran = tipoTran;
    };
    Transaccion.prototype.getMonto = function () {
        return this.monto;
    };
    Transaccion.prototype.setMonto = function (monto) {
        this.monto = monto;
    };
    return Transaccion;
}());
exports.Transaccion = Transaccion;
