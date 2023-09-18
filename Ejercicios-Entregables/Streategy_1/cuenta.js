"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(titular) {
        this.titular = titular;
        this.transacciones = [];
        this.saldo = 0;
    }
    Cuenta.prototype.depositar = function (operacion) {
        this.transacciones.push(operacion);
        this.saldo += operacion.getMonto();
    };
    Cuenta.prototype.retirar = function (operacion) {
        this.transacciones.push(operacion);
        this.saldo -= operacion.getMonto();
    };
    Cuenta.prototype.listarTransacciones = function () {
        console.log(this.transacciones);
        console.log("Saldo actual: ".concat(this.saldo, " u$d"));
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
