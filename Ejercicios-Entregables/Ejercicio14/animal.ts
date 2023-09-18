export class Animal {
    protected nombre: string;
    protected edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;

    }

    public comer() {
        console.log(this.nombre, "se ha puesto a comer.")
    }

    public dormir() {
        console.log(this.nombre, "se acosto a dormir.")
    }
}