import { ArticuloLectura } from "./ArticuloLectura";

export class Libro extends ArticuloLectura {
  constructor(isbn: number, autor: string, editorial: string, titulo: string) {
    super(isbn, autor, editorial, titulo);
  }

  //Redefinicion, implementacion del metodo setCantidadPaginas de la superclase.
  public setCantidadPaginas(cantPaginas: number): boolean {
      let paginas: boolean = false;
      if (cantPaginas > 0) {
      this.cantidadPaginas = cantPaginas;
      paginas = true;
      console.log("Se agrego un libro de ", this.cantidadPaginas, "paginas");
    }
    return paginas;
  }
}
