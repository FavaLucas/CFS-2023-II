"use strict";
exports.__esModule = true;
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(titular, saldo) {
        this.titular = titular;
        if (saldo) {
            this.saldo = saldo;
        }
        else {
            this.saldo = 0;
        }
    }
    Cuenta.prototype.getTitular = function () {
        return this.titular;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.mostrarCuenta = function () {
        console.log("Titular:".concat(this.titular.getNombre(), " | NroCta:").concat(this.titular.getNroCta(), " | $:").concat(this.getSaldo()));
    };
    Cuenta.prototype.ingresarMonto = function (monto) {
        if (monto > 0) {
            this.saldo += monto;
            console.log("Su deposito es de ".concat(monto, ", Su saldo actual es $").concat(this.saldo));
        }
        else {
            console.log("El monto ingresado es incorrecto");
        }
    };
    Cuenta.prototype.retirarMonto = function (monto) {
        this.saldo -= monto;
        console.log("Su extraccion es de ".concat(monto, ", Su saldo actual es $").concat(this.saldo));
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
