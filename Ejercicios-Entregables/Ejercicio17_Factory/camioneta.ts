import { Vehiculo } from "./vehiculo";
export class Camioneta implements Vehiculo {
    arrancar() { 
        console.log('brum brum');
    }
  }