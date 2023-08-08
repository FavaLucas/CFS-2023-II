import { Telefono } from "./Telefono";

export class TelefonoConCamara extends Telefono {
  public constructor() {
    super();
  }

  public sacarFoto(): void {
    console.log("Imagen capturada");
  }
}
