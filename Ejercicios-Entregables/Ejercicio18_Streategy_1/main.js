"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var TransDolar_1 = require("./TransDolar");
var TransPeso_1 = require("./TransPeso");
var TransEuro_1 = require("./TransEuro");
var Context_1 = require("./Context");
var cuenta_1 = require("./cuenta");
var Transaccion_1 = require("./Transaccion");
var cuenta1 = new cuenta_1.Cuenta('JUAN');
for (var i = 0; i < 2; i++) {
    var tipoTransaccion = rls.question('Que operacion desea? (depositar|extraer):');
    var monedaTransaccion = rls.question("Que moneda decea ".concat(tipoTransaccion, "?(peso|dolar|euro):"));
    var montoTransaccion = rls.questionInt("ingrece monto:");
    if (monedaTransaccion == 'peso') {
        var transaccion = new Context_1.Context().setEstrategia(new TransPeso_1.TransaccionPeso(montoTransaccion));
        if (tipoTransaccion == 'depositar') {
            cuenta1.depositar(new Transaccion_1.Transaccion('Deposito', transaccion));
            console.log("se a depositado ".concat(transaccion, " U$D"));
        }
        else if (tipoTransaccion == 'extraer') {
            cuenta1.retirar(new Transaccion_1.Transaccion('Extraccion', transaccion));
            console.log("se a retirado ".concat(transaccion, " U$D"));
        }
    }
    else if (monedaTransaccion == 'euro') {
        var transaccion = new Context_1.Context().setEstrategia(new TransEuro_1.TransaccionEuro(montoTransaccion));
        if (tipoTransaccion == 'depositar') {
            cuenta1.depositar(new Transaccion_1.Transaccion('Deposito', transaccion));
            console.log("se a depositado ".concat(transaccion, " U$D"));
        }
        else if (tipoTransaccion == 'extraer') {
            cuenta1.retirar(new Transaccion_1.Transaccion('Extraccion', transaccion));
            console.log("se a retirado ".concat(transaccion, " U$D"));
        }
    }
    else if (monedaTransaccion == 'dolar') {
        var transaccion = new Context_1.Context().setEstrategia(new TransDolar_1.TransaccionDolar(montoTransaccion));
        if (tipoTransaccion == 'depositar') {
            cuenta1.depositar(new Transaccion_1.Transaccion('Deposito', transaccion));
            console.log("se a depositado ".concat(transaccion, " U$D"));
        }
        else if (tipoTransaccion == 'extraer') {
            cuenta1.retirar(new Transaccion_1.Transaccion('Extraccion', transaccion));
            console.log("se a retirado ".concat(transaccion, " U$D"));
        }
    }
}
console.log('-------------------');
cuenta1.listarTransacciones();
