import { JuegoDeCasino } from "./JuegoDeCasino";

export class TragaMonedas extends JuegoDeCasino {
    private cantFichasUsr: number;

  public constructor() {
    super("Traga Monedas", 10);
    this.cantFichasUsr = 0;
  }

  public getCantFichas(): number {
    return this.cantFichasUsr;
  }
  
  public setCantFichas(fichasUsr): void {
    this.cantFichasUsr = fichasUsr;
  }

  public comprarFichas(dineroUsr): void {
    this.cantFichasUsr = dineroUsr / 5;
    console.log(`Monedas compradas: ${this.cantFichasUsr}.`);
  }

  public iniciarJuego(): void {
    console.log("-----------------------------------------------------------------")
    console.log("Desea apostar con - Anubis III - !.");
    if (this.cantFichasUsr > this.getApuestaMinima()) {
      console.log(`Cuenta con ${this.cantFichasUsr} fichas para jugar.`);
    } else {
      console.log("No cuenta con la cantidad minima de fichas para poder jugar.");
      console.log("Por favor compre mas fichas.");
    }
    console.log("-----------------------------------------------------------------")
  }

  public apostarEnJuego() {
    let apuesta: number = Math.floor(Math.random() * 10) * 2;
    if (this.cantFichasUsr > this.getApuestaMinima()) {
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