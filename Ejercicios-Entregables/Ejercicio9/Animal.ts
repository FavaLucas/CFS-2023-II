export abstract class Animal {
    protected nombre: string;
    protected edad: number;
    protected raza: string;


    constructor(nombre: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    public abstract hacer_sonido():void   
    public abstract moverse():void

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public getRaza(): string {
        return this.raza;
    }

    public setRaza(raza: string): void {
        this.raza = raza;
    }
}