import { Strategy } from "./Strategy";

export class TransaccionPeso implements Strategy {
  protected monedaEntrada: number;
  protected valorDolar: number;
  protected tipoTransaccion: string;
  private valorTransaccion: number;

 
  constructor(monedaEntrada: number, tipoTransaccion: string) {
    this.monedaEntrada = monedaEntrada;
    this.valorDolar = 730;
    this.tipoTransaccion = tipoTransaccion;

  }

  convertirMoneda(): number {
    return this.monedaEntrada / this.valorDolar;
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


