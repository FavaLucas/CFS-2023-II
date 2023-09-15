import { Usuario } from "./usuario";


export class Influencer extends Usuario {
    private numeroDeSeguidores: number;

    public constructor(nombre: string, email: string, contraseña: number, numeroDeSeguidores: number) {
        super(nombre, email, contraseña);

        this.numeroDeSeguidores = numeroDeSeguidores;
    }

    public realizarColaboracion(colaborador: Usuario) {
        console.log(` El influencer ${this.nombre} el cual tiene ${this.numeroDeSeguidores} realizara una colaboracion con ${colaborador.getNombre()}`)
    }
}