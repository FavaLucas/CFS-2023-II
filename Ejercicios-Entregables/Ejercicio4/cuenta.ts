import { Persona } from "./persona";
export class Cuenta {
  private titular: Persona;
  private saldo: number;

  constructor(titular: Persona, saldo?: number) {
    this.titular = titular;
    if (saldo) {
      this.saldo = saldo;
    } else {
      this.saldo = 0;
    }
  }

  public getTitular(): Persona {
    return this.titular;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public mostrarCuenta(): void {
    console.log(
      `Titular:${this.titular.getNombre()} | NroCta:${this.titular.getNroCta()} | $:${this.getSaldo()}`
    );
  }

  public ingresarMonto(monto: number): void {
    if (monto > 0) {
      this.saldo += monto;
      console.log(
        `Su deposito es de ${monto}, Su saldo actual es $${this.saldo}`
      );
    } else {
      console.log("El monto ingresado es incorrecto");
    }
  }
  public retirarMonto(monto: number): void {
    this.saldo -= monto;
    console.log(
      `Su extraccion es de ${monto}, Su saldo actual es $${this.saldo}`
    );
  }
}
