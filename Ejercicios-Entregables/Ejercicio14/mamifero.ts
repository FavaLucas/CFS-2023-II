import { Animal } from "./animal";

export class mamifero extends Animal {
    protected pelaje: string;

    constructor(nombre: string, edad: number, pelaje: string) {
        super(nombre, edad)
        this.pelaje = pelaje;
    }


    public amamantarCrias() {
        console.log(this.nombre, "esta amamantando a sus crias.")
    }
}