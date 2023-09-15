import { Empleado } from "./empleado";

export class Gerente extends Empleado{
    private area: string;

    constructor(nombre: string,apellido: string,salario : number, area: string){
        super(nombre,apellido,salario)
        this.area= area;
    }

    public asignarTarea(empleado:Empleado,tarea:string){
        console.log("Se le ha asigando al",empleado.getNombre(), "la siguiente tarea: ", tarea);
    }
}