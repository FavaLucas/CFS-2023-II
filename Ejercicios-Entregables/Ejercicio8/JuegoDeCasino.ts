export abstract class JuegoDeCasino {
  private nombreJuego: string;
  private apuestaMinima: number;

  public constructor(nombreJuego: string, apuestaMinima: number) {
    this.nombreJuego = nombreJuego;
    this.apuestaMinima = apuestaMinima;
  }

  protected getNombreJuego(): string {
    return this.nombreJuego;
  }

  protected getApuestaMinima(): number {
    return this.apuestaMinima;
  }

  public abstract comprarFichas(dineroUsr);
  public abstract iniciarJuego();
  public abstract apostarEnJuego();
  public abstract canjearFichas();
}
