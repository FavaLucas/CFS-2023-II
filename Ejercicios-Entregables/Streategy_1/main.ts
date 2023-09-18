import * as rls from 'readline-sync';
import { Context } from "./Context";
import { TransaccionDolar } from "./TransDolar";
import { TransaccionPeso } from './TransPeso';
import { TransaccionEuro } from './TransEuro';
import { Cuenta } from './cuenta';

let cuenta1 = new Cuenta('JUAN');




for (let i = 0; i < 3; i++) {
    let tipoTransaccion: string = rls.question('Que operacion desea? (depositar|extraer)');
    let monedaTransaccion: string = rls.question(`Que moneda decea ${tipoTransaccion}?(peso|dolar|euro)`);
    let montoTransaccion: number = rls.questionInt(`ingrece monto:`);


    if (monedaTransaccion == 'peso') {
        let transaccionMoneda = new TransaccionPeso(montoTransaccion, tipoTransaccion);
        let transaccion = new Context().setEstrategia(transaccionMoneda);
        if (tipoTransaccion == 'depositar') {
            cuenta1.depositar(transaccionMoneda, transaccion)
        } else if (tipoTransaccion == 'extraer') {
            cuenta1.retirar(transaccionMoneda, transaccion)
        }


    } else if (monedaTransaccion == 'euro') {
        let transaccionMoneda = new TransaccionEuro(montoTransaccion, tipoTransaccion);
        let transaccion = new Context().setEstrategia(transaccionMoneda);
        if (tipoTransaccion == 'depositar') {
            cuenta1.depositar(transaccionMoneda, transaccion)
        } else if (tipoTransaccion == 'extraer') {
            cuenta1.retirar(transaccionMoneda, transaccion)
        }

    } else if (monedaTransaccion == 'dolar') {
        let transaccionMoneda = new TransaccionDolar(montoTransaccion, tipoTransaccion);
        let transaccion = new Context().setEstrategia(transaccionMoneda);
        if (tipoTransaccion == 'depositar') {
            cuenta1.depositar(transaccionMoneda, transaccion)
        } else if (tipoTransaccion == 'extraer') {
            cuenta1.retirar(transaccionMoneda, transaccion)
        }

    }
}
console.log('-------------------')
cuenta1.listarTransacciones();
