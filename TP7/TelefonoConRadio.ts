import { Telefono } from "./Telefono";

export class TelefonoConRadio extends Telefono {
  private frecuenciaAcutal: number;

  public constructor(frecuenciaAcutal: number) {
    super();
    this.frecuenciaAcutal = frecuenciaAcutal;
  }

  public verFrecuenciaActual(): number {
    console.log("Esta sintonizando la frecuencia: ", this.frecuenciaAcutal);
    return this.frecuenciaAcutal;
  }
}
