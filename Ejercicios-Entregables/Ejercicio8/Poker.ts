import { JuegoDeCasino } from "./JuegoDeCasino";

export class Poker extends JuegoDeCasino {
  private cantFichasUsr: number;

  public constructor() {
    super("Poker", 50);

    this.cantFichasUsr = 0;
  }

  public getCantFichas(): number {
    return this.cantFichasUsr;
  }
  
  public setCantFichas(fichasUsr): void {
    this.cantFichasUsr = fichasUsr;
  }

  public comprarFichas(dineroUsr): void {
    this.cantFichasUsr = dineroUsr / 10;
    console.log(`Fichas compradas: ${this.cantFichasUsr}.`);
  }

  public iniciarJuego(): void {
    console.log("-----------------------------------------------------------------")
    console.log("Iniciando su mano de Poker!.");
    if (this.cantFichasUsr > this.getApuestaMinima()) {
      console.log("Esperando a que mas jugadores de unan...");
      console.log(`Cuenta con ${this.cantFichasUsr} fichas para jugar.`);
    } else {
      console.log("No cuenta con la cantidad minima de fichas para poder jugar.");
      console.log("Por favor compre mas fichas.");
    }
    console.log("-----------------------------------------------------------------")
  }

  public apostarEnJuego() {
    let apuesta: number = Math.floor(Math.random() * 10) * 10;
    if (apuesta > 60) {
      this.cantFichasUsr = this.cantFichasUsr - apuesta;
      console.log(`Lo lamento perdio la ronda, tiene ${apuesta} fichas menos`);
    } else {
      this.cantFichasUsr = this.cantFichasUsr + apuesta;
      console.log(
        `Ha ganado la ronda, tiene ${apuesta} fichas mas. Felicitaciones!`
      );
    }
  }

  public canjearFichas(): void {
    let dinerXCanje: number = this.cantFichasUsr * 10;
    this.cantFichasUsr = 0;
    if (dinerXCanje>0){
    console.log("****************************************************************")
    console.log(`    ****Usted ha canjeado sus fichas, recupero: $${dinerXCanje}.*****`);
    console.log("****************************************************************")
    } else {
      console.log("****************************************************************")
      console.log(`Su saldo es negativo $${dinerXCanje}, debera pagar su deuda o limpiar los pisos!`);
      console.log("****************************************************************")
    }
  }
}
