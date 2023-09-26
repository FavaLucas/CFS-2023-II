import { ArticuloLectura } from "./ArticuloLectura";

export class Libro extends ArticuloLectura {
  public constructor(
    isbn: number,
    autor: string,
    editorial: string,
    titulo: string,
    cantidadPaginas: number
  ) {
    super(isbn, autor, editorial, titulo, cantidadPaginas);
  }

  //Metedo setCantPaginas recibe por parameto la cantidad de paginas que tendra el libro para setearlo al atributo. Si es mayor a 0 es valido.
  public setCantidadPaginas(cantidadPaginas: number): boolean {
    if (cantidadPaginas > 0) {
      cantidadPaginas = cantidadPaginas;
      return true;
    } else {
      console.log("La cantidad de paginas no puede ser negativa");
      return false;
    }
  }
}
