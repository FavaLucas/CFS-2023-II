import { Cuenta } from "./cuenta";

export class CuentaAhorro extends Cuenta {
    private interes: number;

    constructor(id: number, saldo: number, titular: string, interes: number) {
        super(id, saldo, titular);
        this.interes = interes;
    }

    public calcularInteres(saldoAux: number) {
        saldoAux = saldoAux * 1.97;
        console.log("Depositando: $",saldoAux,",Su saldo con interes seria de: $", saldoAux);
    }
}