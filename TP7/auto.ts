import { vehiculo } from "./automovil";

export class Auto extends vehiculo {
    //protected cantRuedas:number;
    public constructor(patente: string, marca: string, modelo: string, anio: number){
    super('auto',patente,marca,modelo,anio);
    //this.cantRuedas=4;
    }
}