export class Persona {
  private nombre: string;
  private NroCta: number;

  constructor(nombre: string, NroCta: number) {
    this.nombre = nombre;
    this.NroCta = NroCta;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getNroCta(): number {
    return this.NroCta;
  }
}
