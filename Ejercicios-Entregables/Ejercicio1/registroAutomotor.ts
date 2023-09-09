import { Auto } from "./Ejercicio 1/auto";
import * as rls from 'readline-sync';
export class RegistroAutomotor {
    private registroAutomotor: Auto[];
    constructor() {
        this.registroAutomotor = [];
    }

    //consultar/borrar/actualizar/Agregar

    public agregarAuto(auto: Auto): void {
        this.registroAutomotor.push(auto);
        console.log(`Se agrego el automovil al registro automotor el vehiculo con dominio: ${auto.getPatente()}`);
    }

    public consultasPatente(patente: string): void {
        let esta: boolean = false;
        for (let i = 0; i < this.registroAutomotor.length; i++) {
            if (this.registroAutomotor[i].getPatente() === patente) {
                console.log(`Su auto con dominio ${patente} se encuentra en el registro.`);
                esta = true;
                break;
            }
        }
        if (!esta) {
            console.log(`Su auto con dominio ${patente} no encuentra en el registro.`);
        }

    }

    public transferirAuto(duenio: string): void {
        console.log(duenio,"se va a transferir tu vehiculo.")
        let nuevoDuenio: string = rls.question("Ingrese el nombre del nuevo propietario: ");
        for (let i = 0; i < this.registroAutomotor.length; i++) {
            if (this.registroAutomotor[i].getDuenio() === duenio) {
                this.registroAutomotor[i].setDuenio(nuevoDuenio);
                console.log("Se ha transferido con exito su vehiculo.");
                console.log("El nuevo propietario del vehiculo es: ", nuevoDuenio);
                break;
            } else {
                console.log("No se encontro el titular ",duenio," en el registro automotor");
            }


        }
    }
    public eliminarAuto(patente: string): void {
        for (let i = 0; i < this.registroAutomotor.length; i++) {
            if (this.registroAutomotor[i].getPatente() === patente) {
                this.registroAutomotor.splice(i, 1)
                console.log("Se ha eliminado el vehiculo de dominio ",patente, "del registro");
                break;
            }
        }
    }
    public imprimirRegistro(): void {
        console.log(this.registroAutomotor);
    }
}