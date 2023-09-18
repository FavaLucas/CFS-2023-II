import { Strategy } from "./Strategy";

export class TransaccionDolar implements Strategy {
  protected monedaEntrada: number;
  protected valorDolar: number;

  constructor(monedaEntrada: number) {
    this.monedaEntrada = monedaEntrada;
    this.valorDolar = 1;
  }

  convertirMoneda(): number {
    return this.monedaEntrada / this.valorDolar;
  }
}