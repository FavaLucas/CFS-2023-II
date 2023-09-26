export abstract class ArticuloLectura {
  private isbn: number;
  private autor: string;
  private editorial: string;
  private titulo: string;
  protected cantidadPaginas: number;

  constructor(isbn: number, autor: string, editorial: string, titulo: string) {
    this.isbn = isbn;
    this.autor = autor;
    this.editorial = editorial;
    this.titulo = titulo;
  }

  public getIsbn(): number {
    return this.isbn;
  }

  public setIsbn(isbn: number): void {
    this.isbn = isbn;
  }

  public getAutor(): string {
    return this.autor;
  }

  public setAutor(autor: string): void {
    this.autor = autor;
  }

  public getEditorial(): string {
    return this.editorial;
  }

  public setEditorial(editorial: string): void {
    this.editorial = editorial;
  }

  public getTitulo(): string {
    return this.titulo;
  }

  public setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  public getCantidadPaginas(): number {
    return this.cantidadPaginas;
  }

  //Metodo abstracto para setear la cantidad de paginas en las subclases Libro y Revista. Retornara booleano.
  public abstract setCantidadPaginas(cantPaginas: number): boolean;
}
