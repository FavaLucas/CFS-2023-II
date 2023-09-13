import { Personaje } from "./Personaje";

export class Guerrero extends Personaje {
    private fuerza: number;

    constructor(danio: number, vida: number, nombre: string, fuerza: number) {
        super(danio, vida, nombre);
        this.fuerza = fuerza;
    }

    public usarEscido(): void {
        
        console.log('Utilizo el escudo');
    }
}