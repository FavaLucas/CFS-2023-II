"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(id, saldo, titular) {
        this.id = id;
        this.saldo = saldo;
        this.titular = titular;
    }
    Cuenta.prototype.depositar = function (deposito) {
        this.saldo += deposito;
        console.log("Usted ha depositado: $", deposito, ".Su nuevo saldo es de: $", this.saldo);
    };
    Cuenta.prototype.retirar = function (retiro) {
        this.saldo -= retiro;
        console.log("Ustes ha retirado: $", retiro, ".Su nuevo saldo es de: $", this.saldo);
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
