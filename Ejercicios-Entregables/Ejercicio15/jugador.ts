import { Deportes } from "./deporte";
import { MiembroClub} from "./miembroClub";


export class Jugador extends MiembroClub {
    private deporte: string;
    public constructor(nombre: string, apellido:string, fechaNac:string,documento: number,telefono:number,miembroDesde:string, indiceDeporte: number){
        super(nombre, apellido, fechaNac,documento,telefono,miembroDesde);
        this.deporte = Deportes[indiceDeporte];
    }
}