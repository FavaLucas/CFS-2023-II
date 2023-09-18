import * as rls from 'readline-sync';
import { TransaccionDolar } from "./TransDolar";
import { TransaccionPeso } from './TransPeso';
import { TransaccionEuro } from './TransEuro';
import { Context } from "./Context";
import { Cuenta } from './cuenta';
import { Transaccion } from './Transaccion';


let cuenta1 = new Cuenta('JUAN');

for (let i = 0; i < 2; i++) {
    let tipoTransaccion: string = rls.question('Que operacion desea? (depositar|extraer):');
    let monedaTransaccion: string = rls.question(`Que moneda decea ${tipoTransaccion}?(peso|dolar|euro):`);
    let montoTransaccion: number = rls.questionInt(`ingrece monto:`);

    

    if (monedaTransaccion == 'peso') {
        let transaccion = new Context().setEstrategia(new TransaccionPeso(montoTransaccion));
        if (tipoTransaccion == 'depositar') {
            cuenta1.depositar(new Transaccion('Deposito', transaccion))
            console.log(`se a depositado ${transaccion} U$D`)

        } else if (tipoTransaccion == 'extraer') {
            cuenta1.retirar(new Transaccion('Extraccion', transaccion))
            console.log(`se a retirado ${transaccion} U$D`)
        }

    } else if (monedaTransaccion == 'euro') {
        let transaccion = new Context().setEstrategia(new TransaccionEuro(montoTransaccion));
        if (tipoTransaccion == 'depositar') {
            cuenta1.depositar(new Transaccion('Deposito', transaccion))
            console.log(`se a depositado ${transaccion} U$D`)
        } else if (tipoTransaccion == 'extraer') {
            cuenta1.retirar(new Transaccion('Extraccion', transaccion))
            console.log(`se a retirado ${transaccion} U$D`)
        }
    } else if (monedaTransaccion == 'dolar') {
        let transaccion = new Context().setEstrategia(new TransaccionDolar(montoTransaccion));
        if (tipoTransaccion == 'depositar') {
            cuenta1.depositar(new Transaccion('Deposito', transaccion))
            console.log(`se a depositado ${transaccion} U$D`)
        } else if (tipoTransaccion == 'extraer') {
            cuenta1.retirar(new Transaccion('Extraccion', transaccion))
            console.log(`se a retirado ${transaccion} U$D`)
        }
    }
}

console.log('-------------------')
cuenta1.listarTransacciones();
