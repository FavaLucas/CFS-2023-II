import { FabricaDeVehiculo } from "./FabricaDeVehiculo";

export class Vehiculo implements FabricaDeVehiculo {
  protected marca: string;
  protected modelo: number;
  protected cantidadAsientos: number;
  protected capacidadCarga: number;

  public constructor() {}

  public crearVehiculo(marca: string, modelo: number, cantidadAsientos: number, capacidadCarga: number): Vehiculo {
    this.marca = marca;
    this.modelo = modelo;
    this.cantidadAsientos = cantidadAsientos;
    this.capacidadCarga = capacidadCarga;
    if (capacidadCarga > 500) {
      console.log("Se construyo una Camioneta");
    } else {
      console.log("Se construyo un Auto");
    }
    return Vehiculo;
  }

  public getMarca(): string {
    return this.marca;
  }
  public getModelo(): number {
    return this.modelo;
  }
  public getCantidadDeAsientos(): number {
    return this.cantidadAsientos;
  }
  getCapacidadDeCarga(): number {
    return this.capacidadCarga;
  }
}
