import { creadorvehiculo } from "./creadorVehiculo"
import { Vehiculo } from "./vehiculo"
import { Camioneta } from "./camioneta"
export class creadorCamioneta extends creadorvehiculo {
    
    constructor(marca: string, modelo: number, cantidadAsientos: number, capacidadCarga: number){
        super(marca, modelo, cantidadAsientos, capacidadCarga)
    }

    crearVehiculo(): Vehiculo {
     return new Camioneta()
   }
 }