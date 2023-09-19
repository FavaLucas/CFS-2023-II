import { Cliente } from "./Cliente";

export class CliPlatino implements Cliente {
  //descuento 20% a todo
  public comprarProducto(precio: number): number {
    return precio * 0.8;
  }

}