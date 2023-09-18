export class Transaccion {
    private tipoTran: string;
    private monto: number;
    
    constructor(tipoTran: string, monto: number) {
        this.tipoTran = tipoTran
        this.monto = monto
    } 

    public getTipoTran(): string {
        return this.tipoTran;
    }

    public setTipoTran(tipoTran: string): void {
        this.tipoTran = tipoTran;
    }

    public getMonto(): number {
        return this.monto;
    }

    public setMonto(monto: number): void {
        this.monto = monto;
    }
}