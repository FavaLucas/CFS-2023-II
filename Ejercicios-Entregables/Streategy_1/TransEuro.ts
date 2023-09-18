import { Strategy } from "./Strategy";

export class TransaccionEuro implements Strategy {
    protected monedaEntrada: number;
    protected valorDolar: number;

    constructor(monedaEntrada: number) {
        this.monedaEntrada = monedaEntrada;
        this.valorDolar = 1.07;
    }

    convertirMoneda(): number {
        return this.monedaEntrada / this.valorDolar;
    }
}