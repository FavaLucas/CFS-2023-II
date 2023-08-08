import { vehiculo } from "./automovil";

export class Moto extends vehiculo {
    //protected cantRuedas:number;
    public constructor(patente: string, marca: string, modelo: string, anio: number){
    super('moto',patente,marca,modelo,anio);
    //this.cantRuedas=2;
    }
}