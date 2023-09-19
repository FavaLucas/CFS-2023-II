import { Cliente } from "./Cliente";

export class CliGold implements Cliente {
  //descuento 20% producto mayores a 10k
  public comprarProducto(precio: number): number {
    if (precio > 10000) {
      return precio * 0.8
    }
    return precio;
  }
}