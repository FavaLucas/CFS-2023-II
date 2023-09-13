import { Personaje } from "./Personaje";

export class Mago extends Personaje {
    private manaAdicional: number;

    constructor(danio: number, vida: number, nombre: string,manaAdicional:number) {
        super(danio, vida, nombre);
        this.manaAdicional = manaAdicional;
    }

    public lanzarEchizo():void {
        
        console.log('se lanzo un echizo')
    }
}