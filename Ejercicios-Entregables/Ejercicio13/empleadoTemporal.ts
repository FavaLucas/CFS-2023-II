import { Trabajador } from "./trabajador";

export class EmpleadoTemporal extends Trabajador{   
    private fechaFinContrato: string;

    constructor(nombre: string,apellido: string,salario : number, horasTrabajadas: number,fechaFinContrato: string){
        super(nombre,apellido,salario, horasTrabajadas)
        this.fechaFinContrato = fechaFinContrato;
    }

    public verificarVencimientoContrato (fecha:string): boolean{ 
        let auxFec = Date.parse(fecha);
        let auxFinContrato =Date.parse(this.fechaFinContrato);
        if (auxFinContrato > auxFec){
            console.log("Aun su contrato sigue vigente");
            return true;
        } else {
            console.log("Su contrato se ha acabado");
            return false;
        }
    }

}