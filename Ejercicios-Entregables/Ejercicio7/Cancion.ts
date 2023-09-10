export class Cancion {
  private titulo: string;
  private autor: string;

  public constructor(titulo?: string, autor?: string) {
    if (!titulo && !autor) {
      this.titulo = "";
      this.autor = "";
    } else if (titulo && autor) {
      this.titulo = titulo;
      this.autor = autor;
    }
  }

  public mostrarTitulo(): string {
    return this.titulo;
  }
  public mostrarAutor(): string {
    return this.autor;
  }
  public ponerTitulo(nuevoTitulo: string): void {
    this.titulo = nuevoTitulo;
  }
  public ponerAutor(nuevoAutor: string): void {
    this.autor = nuevoAutor;
  }
}
