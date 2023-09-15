export class Empleado {
    protected nombre: string;
    protected apellido: string;
    protected salario : number;

    constructor(nombre: string,apellido: string,salario : number) {
        this.nombre = nombre;
        this.apellido= apellido;
        this.salario = salario;
    }

    public getNombre(): string {
        return this.nombre
    }

    public getSalario(): number {
        return this.salario
    }

    public setSalario(salario:number): void {
        this.salario = salario;
    }

    public aumentarSalario(trabajador:Empleado, porcentaje:number){   
        trabajador.setSalario(trabajador.getSalario()+(trabajador.getSalario() * porcentaje)/100);    
        console.log("Se le ha aumenta el salario al ", trabajador.getNombre(),"en un ", porcentaje,"%");
        console.log("Su nuevo salario es de: ",trabajador.getSalario());
    }

    public reducirSalario(trabajador:Empleado, porcentaje:number){
        trabajador.setSalario(trabajador.getSalario()-(trabajador.getSalario() * porcentaje)/100);
        console.log("Se le ha reducido el salario al ", trabajador.getNombre(),"en un ", porcentaje,"%");
        console.log("Su nuevo salario es de: ",trabajador.getSalario());
    }
}