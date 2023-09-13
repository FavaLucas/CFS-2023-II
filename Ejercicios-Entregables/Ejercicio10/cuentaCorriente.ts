import { Cuenta } from "./cuenta";

export class CuentaCorriente extends Cuenta {
    private sobregiro: number;

    constructor(id: number, saldo: number, titular: string, sobregiro: number) {
        super(id, saldo, titular);
        this.sobregiro = sobregiro;
    }

    public aplicarInteres():void {
        this.saldo = this.saldo * 1.97;
        console.log("Su saldo con interes es de: $", this.saldo);
    }
}