import { Context } from "./Context";
import { Strategy } from "./Strategy";
import { Transaccion } from "./Transaccion";

export class Cuenta {
    protected titular: string;
    protected transacciones: Transaccion[];
    private saldo: number;

    constructor(titular: string) {
        this.titular = titular;
        this.transacciones = [];
        this.saldo = 0;
    }

    public depositar(operacion:Transaccion): void {
        this.transacciones.push(operacion)
        this.saldo+=operacion.getMonto()
    }

    public retirar(operacion:Transaccion): void {
        this.transacciones.push(operacion)
        this.saldo-=operacion.getMonto()
    }

    public listarTransacciones():void{
        console.log(this.transacciones)
        console.log(`Saldo actual: ${this.saldo} u$d`)
    } 
}


