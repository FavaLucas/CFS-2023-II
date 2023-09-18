"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(titular) {
        this.titular = titular;
        this.transacciones = [];
        this.saldo = 0;
    }
    Cuenta.prototype.depositar = function (monto, dolar) {
        this.transacciones.push(monto);
        this.saldo += dolar;
        monto.setValorTransaccion(dolar);
        console.log("Ustes ha depositado: $", dolar, ".Su nuevo saldo es de: $", this.saldo);
    };
    Cuenta.prototype.retirar = function (monto, dolar) {
        this.transacciones.push(monto);
        this.saldo -= dolar;
        monto.setValorTransaccion(dolar);
        console.log("Ustes ha retirado: $", dolar, ".Su nuevo saldo es de: $", this.saldo);
    };
    Cuenta.prototype.listarTransacciones = function () {
        this.transacciones.forEach(function (element) {
            console.log("tipo transaccion :".concat(element.getTipoTransaccion(), ", monto: ").concat(element.getValorTransaccion(), "  "));
        });
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
