// import { Deportes } from "./deporte";
import { MiembroClub} from "./miembroClub";


export class Jugador extends MiembroClub {
    //private deporte: Deportes;
    public constructor(nombre, apellido, fechaNac,documento,telefono,miembroDesde, /*deporte?: Deportes*/){
        super(nombre, apellido, fechaNac,documento,telefono,miembroDesde)
        /*this.deporte = deporte;*/
    }
}