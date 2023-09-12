import { Persona } from "./persona";

export abstract class MiembroClub implements Persona {
  nombre: string;
  apellido: string;
  fechaNac: string;
  documento: number;
  telefono: number;
  private miembroDesde: String;
  public constructor(
    nombre: string,
    apellido: string,
    fechaNac: string,
    documento: number,
    telefono: number,
    miembroDesde: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNac = fechaNac;
    this.documento = documento;
    this.telefono = telefono;
    this.miembroDesde = miembroDesde;
  }
}
