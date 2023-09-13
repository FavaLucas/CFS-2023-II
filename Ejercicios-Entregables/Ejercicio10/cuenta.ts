export class Cuenta {
    protected id: number;
    protected saldo: number;
    protected titular: string;

    constructor(id: number, saldo: number, titular: string) {
        this.id = id;
        this.saldo = id;
        this.titular = titular;
    }

    public depositar(deposito:number):void {
        this.saldo += deposito;
        console.log("Usted ha depositado: $",deposito,".Su nuevo saldo es de: $", this.saldo);
    }

    public retirar(retiro:number):void {
        this.saldo -= retiro;
        console.log("Ustes ha retirado: $",retiro,".Su nuevo saldo es de: $", this.saldo);
    }
}