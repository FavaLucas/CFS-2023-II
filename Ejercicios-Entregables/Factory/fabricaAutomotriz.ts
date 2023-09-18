import { creadorAuto } from "./creadorAuto"
import { creadorCamioneta } from "./creadorCamioneta"
import { Vehiculo } from "./vehiculo"

export class fabricaAutomotris {
    crearVehiculo(tipoVehiculo: string, marca: string, modelo: number, cantidadAsientos: number, capacidadCarga: number): Vehiculo {
        let v: Vehiculo;
        if (tipoVehiculo == "auto") {
            let creaAuto = new creadorAuto(marca, modelo, cantidadAsientos, capacidadCarga);
            v = creaAuto.crearVehiculo()
            console.log(`Se ha creado un auto de marca ${marca}, modelo ${modelo}, con ${cantidadAsientos} asientos y capacidad de carga de ${capacidadCarga} kg.`);
            return v;
        } else if (tipoVehiculo == "camioneta") {
            let creaCamioneta = new creadorCamioneta(marca, modelo, cantidadAsientos, capacidadCarga);
            v = creaCamioneta.crearVehiculo()
            console.log(`Se ha creado una camioneta de marca ${marca}, modelo ${modelo}, con ${cantidadAsientos} asientos y capacidad de carga de ${capacidadCarga} kg.`);
            return v;
        }
    }

}