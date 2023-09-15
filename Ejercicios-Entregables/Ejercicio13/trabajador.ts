import { Empleado } from "./empleado";

export class Trabajador extends Empleado{
    protected horasTrabajadas: number;

    constructor(nombre: string,apellido: string,salario : number, horasTrabajadas: number){
        super(nombre,apellido,salario)
        this.horasTrabajadas= horasTrabajadas;
    }

    public solicitarDiaLibre(dia:string){
        console.log("Se ha solicitado el día", dia, "franco para el trabajador.");
    }
}