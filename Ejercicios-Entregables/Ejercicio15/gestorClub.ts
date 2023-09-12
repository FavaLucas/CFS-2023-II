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
  
  // public guardarInformacion(socio: Jugador): void {
  //   const fileDescriptor = fs.openSync(this.path, 'a'); 
  //   fs.appendFileSync(fileDescriptor, `${JSON.stringify(socio)}\n`, {encoding: 'utf8', flag: 'a'});
  //   fs.closeSync(fileDescriptor); // Cierra el archivo
  // }
  
  public guardarInformacion(socio: Jugador): void {
    this.sociosDelClub.push(socio)
    fs.writeFileSync(this.path, `${JSON.stringify(this.sociosDelClub, null, 2)}`);
  }
  
  public altaDeSocio (){
    let nombre: string = rls.question("Ingrese el nombre del socio: ");
    let apellido: string = rls.question("Ingrese el apellido del socio: ");
    let fechaNaciomiento: string = rls.question("Ingrese el fecha de nacimiento del socio: ");
    let documento: number = rls.question("Ingrese el documento del socio: ");
    let telefono: number = rls.question("Ingrese el telefono del socio: ");
    let miembroDesde: string = rls.question("Ingrese el miembro desde: ");
    let deporte: number = rls.question("Futbol = 0, Tenis = 1, Natacion = 2: ");

    this.guardarInformacion(new Jugador(nombre, apellido,fechaNaciomiento,documento,telefono, miembroDesde, deporte));
  }
}
