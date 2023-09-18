import { Strategy } from "./Strategy";


export class TransaccionDolar implements Strategy {
    protected monedaEntrada: number;
    protected valorDolar: number;
    protected tipoTransaccion: string;
    private valorTransaccion: number;

    constructor(monedaEntrada: number, tipoTransaccion: string) {
        this.monedaEntrada = monedaEntrada;
        this.valorDolar = 1;
        this.tipoTransaccion = tipoTransaccion;
    }

    convertirMoneda(): number {
        return this.monedaEntrada;
    }
    public getMonedaEntrada(): number {
        return this.monedaEntrada;
    }
    public getTipoTransaccion(): string {
        return this.tipoTransaccion;
    }

    public getValorTransaccion(): number {
        return this.valorTransaccion;
    }

    public setValorTransaccion(valor: number): void {
        this.valorTransaccion = valor;
    }
}