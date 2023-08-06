import * as rls from "readline-sync";

export class Auto {
  private marca: string;
  private modelo: number;
  private patente: number;
  private dueño: string;
  private estado: string;

  constructor(
    marca: string,
    modelo: number,
    patente: number,
    dueño: string,
    estado: string
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.patente = patente;
    this.dueño = dueño;
    this.estado = estado;
  }

  public getMarca(): string {
    return this.marca;
  }
  public setMarca(marca: string): void {
    this.marca = marca;
  }
  public getModelo(): number {
    return this.modelo;
  }
  public setModelo(modelo: number): void {
    this.modelo = modelo;
  }
  public getPatente(): number {
    return this.patente;
  }
  public setpatente(patente: number): void {
    this.patente = patente;
  }
  public getDueño(): string {
    return this.dueño;
  }
  public setDueño(dueño: string): void {
    this.dueño = dueño;
  }
  public getEstado(): string {
    return this.estado;
  }
  public setEstado(estado: string): void {
    this.estado = estado;
  }
  public encenderAuto(): void {
    this.estado == "Encendido";
    console.log(this.dueño, "su auto se a encendido");
  }
  public apagarAuto(): void {
    this.estado == "Apagado";
    console.log(this.dueño, "su auto se a apagado");
  }
  public acelerarAuto(aceleracion: number): void {
    console.log(this.dueño, "La acelaracion de su auto es de 30km/h");
  }
  public frenarAuto(): void {
    console.log(this.dueño, "Su auto ha frenado");
  }
}

function crearAuto(): Auto {
  let marca, dueño: string;
  let modelo, patente: number;
  marca = rls.question("Ingrese la marca de su auto: ");
  modelo = rls.questionInt("Ingrese el modelo (año) del auto: ");
  patente = rls.questionInt("Ingrese la patente del auto: ");
  dueño = rls.question("Ingrese el dueño del auto: ");

  let auto = new Auto(marca, modelo, patente, dueño, "");
  return auto;
}

//let auto1 = new Auto("Ford", 2018, 41234, "Lucas Fava", "");
//let auto2 = new Auto("Toyota", 2022, 7456, "Daniel Somoza", "");
//let auto3 = new Auto("Volkswagen", 2016, 91823, "Kevin Frias", "");
//let auto4 = new Auto("Peugeot", 2020, 123092, "Lorena Planes", "");

//auto1.encenderAuto();
//auto3.apagarAuto();
//auto2.acelerarAuto(30);
//auto2.frenarAuto();

//let auto5 = crearAuto();
//console.log(auto5);

