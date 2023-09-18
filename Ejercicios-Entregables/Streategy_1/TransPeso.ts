import { Strategy } from "./Strategy";

export class TransaccionPeso implements Strategy {
  protected monedaEntrada: number;
  protected valorDolar: number;

  constructor(monedaEntrada: number) {
    this.monedaEntrada = monedaEntrada;
    this.valorDolar = 730;
  }

  convertirMoneda(): number {
    return this.monedaEntrada / this.valorDolar;
  }
}