export abstract class ArticuloLectura {
  private isbn: number;
  private autor: string;
  private editorial: string;
  private titulo: string;

  protected cantidadPaginas: number;

  public constructor(
    isbn: number,
    autor: string,
    editorial: string,
    titulo: string,
    cantidadPaginas: number
  ) {
    this.isbn = isbn;
    this.autor = autor;
    this.editorial = editorial;
    this.titulo = titulo;
    this.cantidadPaginas = cantidadPaginas;
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
  //Metodos Getters and Setters se asumen implementados
  //Metodo abstracto setCantidadPaginas

  abstract setCantidadPaginas(cantidadPaginas: number): boolean;
}
