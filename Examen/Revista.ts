import { ArticuloLectura } from "./ArticuloLectura";

export class Revista extends ArticuloLectura {
  private articulos: string[];
  public constructor(
    isbn: number,
    autor: string,
    editorial: string,
    titulo: string,
    cantidadPaginas: number
  ) {
    super(isbn, autor, editorial, titulo, cantidadPaginas);
    this.articulos = [];
  }

  //Defino el metodo abstracto de la clase ArticuloLectura
   //Metedo setCantPaginas recibe por parameto la cantidad de paginas que tendra la revista para setearlo al atributo. Si es mayor a 50 no sera valido.
  public setCantidadPaginas(cantidadPaginas: number): boolean {
    if (cantidadPaginas > 50) {
      throw new Error("Supero la cantidad de paginas posibles del articulo");
      return false;
    } else {
      cantidadPaginas = cantidadPaginas;
      return true;
    }
  }
}
