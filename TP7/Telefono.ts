import * as rls from "readline-sync"

export class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;

    public constructor(){
        this.estaPrendido = true;
        this.bateriaActual = 100;
    }

    public mandarMensaje(): void {
        let mensaje: string = rls.question("Ingrese el mensaje que desea enviar: ");
        console.log("Su mensaje (" ,mensaje, ") ha sido enviado con exito");
    }

    public hacerLlamada(): void{
        let numero: number = rls.questionInt("Ingrese el numero donde desea llamar: ");
        console.log("Llamando al: ", numero);
    }

    public prenderApagar(){
        if (this.estaPrendido){
        this.estaPrendido = false;
        console.log("Apagando su telefono");
        }else{
            this.estaPrendido = true;
            console.log("Encendiendo su telefono");
        }
    }

}