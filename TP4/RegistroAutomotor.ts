import * as rls from "readline-sync";
import { Auto } from "./Auto";

//armar las funciones consultar, eliminar, agregar, modificar
//sino agregar las instrucciones directo en el metodode la clase registro.

class RegistroAutomotor {
  private nombreRegistro: string;
  private registro: Auto[];

  constructor(nombreRegistro: string) {
    this.nombreRegistro = nombreRegistro;
    this.registro = [];
  }
  public getNombreRegistro(): string {
    return this.nombreRegistro;
  }
  public setNombreRegistro(nombreRegistro: string): void {
    this.nombreRegistro = nombreRegistro;
  }
  public agregarAuto(auto: Auto) {
    this.registro.push(auto);
    console.log("Nuevo ingreso al Registo: ", auto);
  }
  public mostrarRegistro(): void {
    console.log("Su registro cuenta con los siguientes autos: ");
    console.log(this.registro);
  }
  public eliminarAutoPorPatente(patente: number): void {
    for (let index = 0; index < this.registro.length; index++) {
      if (this.registro[index].getPatente() == patente) {
        this.registro.splice(index, 1);
        console.log("Se ha eliminado el Auto de su registro");
      }
    }
  }
  public consultarPropietario(propietario: string) {
    for (let index = 0; index < this.registro.length; index++) {
      let encontrado: boolean = false;
      if (this.registro[index].getDueño() == propietario) {
        console.log("Registro encontrado: ", this.registro[index]);
        encontrado = true;
      }
      if (encontrado == false) {
        console.log("No se encontraron datos de ese propietario");
      }
    }
  }
  public actualizarAuto(auto: Auto){
    for (let index = 0; index < this.registro.length; index++) {
        if (this.registro[index] == auto) {
          this.registro[index].setDueño = rls.question("Ingrese dueño");
          this.registro[index].setMarca = rls.question("Ingrese marca");
          this.registro[index].setModelo = rls.question("Ingrese modelo");
          this.registro[index].setpatente = rls.question("Ingrese patente");
        }
        console.log("Los cambios se registraron: ", this.registro[index]);
  }

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

//Inicio del programa
// revisar lo que tengo que pasar a funciones para no repetir codigo

console.log("");
let nombreRegistro: string = rls.question(
  "Bienvenido! Ingrese el nombre de su nuevo Registro del Automotor: "
);
console.log("");
let Registro = new RegistroAutomotor(nombreRegistro);
console.log("----------------------------------------------------------");
console.log("");
console.log(
  "Felicitacionesse ha creado el Registro del Automotor: ",
  Registro.getNombreRegistro()
);
console.log("");
console.log("----------------------------------------------------------");

let nuevoIngreso: string = rls.question(
  "Desea ingresar un auto a su registro? (y/n): "
);
while (nuevoIngreso == "y") {
  let auto = crearAuto();
  Registro.agregarAuto(auto);
  nuevoIngreso = rls.question("Desea ingresar un nuevo auto?: (y/n): ");
}
console.log("----------------------------------------------------------");
Registro.mostrarRegistro();

console.log("-----------------------------------------------------------");
let elimiarAuto: string = rls.question(
  "Desea elimiar algun auto del Registro? (y/n): "
);
while (elimiarAuto == "y") {
  let patente: number = rls.questionInt(
    "Ingrese el numero de patente del auto a eliminar: "
  );
  Registro.eliminarAutoPorPatente(patente);
  console.log("-----------------------------------------------------------");
  elimiarAuto = rls.question("Desea eliminar otro auto? (y/n): ");
}

console.log("-----------------------------------------------------------");
let consultarPropietario: string = rls.question(
  "Desea consultar por algun auto del Registro? (y/n): "
);
while (consultarPropietario == "y") {
  let propietario: string = rls.question(
    "Ingrese el nombre del Propietario que desea consultar: "
  );
  Registro.consultarPropietario(propietario);
  console.log("-----------------------------------------------------------");
  consultarPropietario = rls.question("Desea consultar por otro auto? (y/n): ");

}

console.log("-----------------------------------------------------------");
Registro.actualizarAuto(new Auto("ford", 123,123,"asd",""));
