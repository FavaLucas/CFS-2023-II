import { Cliente } from "./Cliente";

export class CliRegular implements Cliente {
  //no tiene descuento
  public comprarProducto(precio: number): number {
    let productoDescuento: number = precio;
    return productoDescuento;
  }
}