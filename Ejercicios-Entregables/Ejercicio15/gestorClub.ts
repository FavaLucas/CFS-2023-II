import * as fs from "fs";
import * as path from "path";
import * as rls from "readline-sync";
import { Jugador } from "./jugador";

export class GestorClub {
  private nombreDelClub: string;
  private sociosDelClub: Jugador[];
  private path = path.resolve("./legajoSocios.json");

  public constructor(nombreDelClub: string) {
    this.nombreDelClub = nombreDelClub;
    this.sociosDelClub = [];
  }
  
  public guardarInformacion(socio: Jugador): void {
    fs.writeFileSync(this.path, `${JSON.stringify([socio])}\n`, { flag: "a" });
  }

  public altaDeSocio (){
    let nombre: string = rls.question("Ingrese el nombre del socio: ");
    let apellido: string = rls.question("Ingrese el apellido del socio: ");
    let fechaNaciomiento: string = rls.question("Ingrese el fecha de nacimiento del socio: ");
    let documento: number = rls.question("Ingrese el documento del socio: ");
    let telefono: number = rls.question("Ingrese el telefono del socio: ");
    let miembroDesde: number = rls.question("Ingrese el miembro desde: ");

    this.guardarInformacion(new Jugador(nombre, apellido,fechaNaciomiento,documento,telefono, miembroDesde));
  }
}
