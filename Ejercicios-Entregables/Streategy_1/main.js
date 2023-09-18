"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var Context_1 = require("./Context");
var TransDolar_1 = require("./TransDolar");
var TransPeso_1 = require("./TransPeso");
var TransEuro_1 = require("./TransEuro");
var cuenta_1 = require("./cuenta");
var cuenta1 = new cuenta_1.Cuenta('JUAN');
for (var i = 0; i < 3; i++) {
    var tipoTransaccion = rls.question('Que operacion desea? (depositar|extraer)');
    var monedaTransaccion = rls.question("Que moneda decea ".concat(tipoTransaccion, "?(peso|dolar|euro)"));
    var montoTransaccion = rls.questionInt("ingrece monto:");
    if (monedaTransaccion == 'peso') {
        var transaccionMoneda = new TransPeso_1.TransaccionPeso(montoTransaccion, tipoTransaccion);
        var transaccion = new Context_1.Context().setEstrategia(transaccionMoneda);
        if (tipoTransaccion == 'depositar') {
            cuenta1.depositar(transaccionMoneda, transaccion);
        }
        else if (tipoTransaccion == 'extraer') {
            cuenta1.retirar(transaccionMoneda, transaccion);
        }
    }
    else if (monedaTransaccion == 'euro') {
        var transaccionMoneda = new TransEuro_1.TransaccionEuro(montoTransaccion, tipoTransaccion);
        var transaccion = new Context_1.Context().setEstrategia(transaccionMoneda);
        if (tipoTransaccion == 'depositar') {
            cuenta1.depositar(transaccionMoneda, transaccion);
        }
        else if (tipoTransaccion == 'extraer') {
            cuenta1.retirar(transaccionMoneda, transaccion);
        }
    }
    else if (monedaTransaccion == 'dolar') {
        var transaccionMoneda = new TransDolar_1.TransaccionDolar(montoTransaccion, tipoTransaccion);
        var transaccion = new Context_1.Context().setEstrategia(transaccionMoneda);
        if (tipoTransaccion == 'depositar') {
            cuenta1.depositar(transaccionMoneda, transaccion);
        }
        else if (tipoTransaccion == 'extraer') {
            cuenta1.retirar(transaccionMoneda, transaccion);
        }
    }
}
console.log('-------------------');
cuenta1.listarTransacciones();
