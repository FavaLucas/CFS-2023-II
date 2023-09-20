export class Examen {
  private nota: number;

  constructor(nota: number) {
    this.nota = nota;
  }
  public getNota(): number {
    return this.nota;
  }
}
