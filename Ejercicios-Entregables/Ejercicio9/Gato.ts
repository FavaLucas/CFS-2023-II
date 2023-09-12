import { Animal } from "./Animal";
export class Gato extends Animal {
    private pelaje: string;

    constructor(nombre: string, edad: number, raza: string, pelaje: string) {
        super(nombre, edad, raza)
        this.pelaje = pelaje;
    }

    public hacer_sonido(): void {
        console.log(`${this.nombre} Miau* Miau*`);
    }
    public moverse(): void {
        console.log('se mueve*');
    }
    public Jugar(obj: string): void {
        console.log(`${this.nombre} esta jugando con ${obj}`);
    }

    public getPelaje(): string {
        return this.pelaje;
    }

    public setPelaje(pelaje: string): void {
        this.pelaje = pelaje;
    }
}