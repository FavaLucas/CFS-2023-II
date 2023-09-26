import { ArticuloLectura } from "./ArticuloLectura";

export class Revista extends ArticuloLectura {
  private articulos: string[];

  constructor(isbn: number, autor: string, editorial: string, titulo: string) {
    super(isbn, autor, editorial, titulo);
    this.articulos = [];
  }

  //Redefinicion, implementacion del metodo setCantidadPaginas de la superclase.
  //Si el parametro de entrada es superior a 50 no se puede crear el articulo y se retorna false.
  //Si el parametro de entrada es menor o igual a 50, se creara el articulo.
  public setCantidadPaginas(cantPaginas: number): boolean {
    try {
      let paginas: boolean = false;
      if (cantPaginas > 50) {
        throw new Error(
          "No se pudo crear el articulo ya que supera las 50 paginas"
        );
      } else {
        this.cantidadPaginas = cantPaginas;
        paginas = true;
        console.log("Se agrego una revista de ", this.cantidadPaginas, "paginas");
      }
      return paginas;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
