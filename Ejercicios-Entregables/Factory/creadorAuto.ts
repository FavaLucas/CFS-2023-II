import { creadorvehiculo } from "./creadorVehiculo"
import { Vehiculo } from "./vehiculo"
import { Auto } from "./auto"

export class creadorAuto extends creadorvehiculo {

    constructor(marca: string, modelo: number, cantidadAsientos: number, capacidadCarga: number){
        super(marca, modelo, cantidadAsientos, capacidadCarga)
    }
    
    crearVehiculo(): Vehiculo {
        return new Auto()
    }
}