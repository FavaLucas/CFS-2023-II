import { Animal } from "./Animal";
export class Pajaro extends Animal {
    private tipo_de_pico: string;

    constructor(nombre: string, edad: number, raza: string, tipo_de_pico: string) {
        super(nombre, edad, raza)
        this.tipo_de_pico = tipo_de_pico;
    }

    public hacer_sonido(): void {
        console.log(`${this.nombre} Miau* Miau*`);
    }
    public moverse(): void {
        console.log('se mueve*');
    }
    public volar(): void {
        console.log(`${this.nombre} se fue volando`);
    }

    public getTipo_de_pico(): string {
        return this.tipo_de_pico;
    }

    public setTipo_de_pico(tipo_de_pico: string): void {
        this.tipo_de_pico = tipo_de_pico;
    }
}