import { mamifero } from "./mamifero";

export class murciegalo extends mamifero {
    private habilidades: string;

    constructor(nombre: string, edad: number, pelaje: string, habilidades: string) {
        super(nombre, edad, pelaje)
        this.habilidades = habilidades;
    }

    public utilizarEcolocalizacion() {
        console.log("El murciegalo ", this.nombre, "ha utilizado su ecolocalizacion y se ubico en su entorno.")
    }
}