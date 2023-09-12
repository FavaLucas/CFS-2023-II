import { Animal } from "./Animal";

export class Perro extends Animal{
    private tamaño:string;

    constructor(nombre: string, edad: number, raza: string,tamano:string){
        super(nombre,edad,raza)
        this.tamaño=tamano;
    }

    public hacer_sonido():void {
        console.log(`${this.nombre} Guau* Guau*`);
    }  
    public moverse():void{
        console.log('se mueve*');
    }
    public buscarObjeto(obj:string):void{
        console.log(`${this.nombre} encontro su ${obj}`);
    }
 
    public getTamañO(): string {
        return this.tamaño;
    }

    public setTamañO(tamaño: string): void {
        this.tamaño = tamaño;
    }

}