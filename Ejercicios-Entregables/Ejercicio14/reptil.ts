import { Animal } from "./animal";

export class reptil extends Animal {
    private escamas: string;

    constructor(nombre: string, edad: number, escamas: string) {
        super(nombre, edad)
        this.escamas = escamas;
    }

    public tempCorporal() {
        console.log(this.nombre, "regulo su temperatura.");
    }
}