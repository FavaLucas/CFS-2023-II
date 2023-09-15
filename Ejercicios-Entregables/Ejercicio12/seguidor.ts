import { Usuario } from "./usuario";


export class Seguidor extends Usuario {
    private intereses: string;

    public constructor(nombre: string, email: string, contraseña: number,intereses: string){
        super(nombre, email, contraseña);
        
        this.intereses= intereses;
    }

    public buscarContenidoRelacionado(){
       console.log (`Se buscara contenido relacionado a los intereses de ${this.getNombre()}: ${this.intereses}`)
    }
}