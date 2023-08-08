import { vehiculo } from "./automovil";

export class Camion extends vehiculo {
    //protected cantRuedas:number;
    public constructor(patente: string, marca: string, modelo: string, anio: number){
    super('camion',patente,marca,modelo,anio);
    //this.cantRuedas=6;
    }
}