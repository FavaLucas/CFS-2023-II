import { Context } from "./Context";
import { Strategy } from "./Strategy";

export class Cuenta {
    protected titular: string;
    protected transacciones: Strategy[];
    private saldo: number;

    constructor(titular: string) {
        this.titular = titular;
        this.transacciones = [];
        this.saldo = 0;
    }

    public depositar(monto: Strategy,dolar:number): void {
        this.transacciones.push(monto)
        this.saldo += dolar;
        monto.setValorTransaccion(dolar)
        console.log("Ustes ha depositado: $", dolar, ".Su nuevo saldo es de: $", this.saldo);
    }

    public retirar(monto: Strategy,dolar:number): void {
        this.transacciones.push(monto)
        this.saldo -= dolar;
        monto.setValorTransaccion(dolar);
        console.log("Ustes ha retirado: $", dolar, ".Su nuevo saldo es de: $", this.saldo);
    }

    public listarTransacciones():void{
        this.transacciones.forEach(element => {
            console.log(`tipo transaccion :${element.getTipoTransaccion()}, monto: ${element.getValorTransaccion()}  `)                
        });
    }
}


