
abstract class docPersonal {
    protected nombre: string;
    protected dni: number;
    protected fechaNacimiento: string;
    protected nacionalidad: string;

    public constructor(nombre: string, dni: number, fechaNacimiento: string, nacionalidad: string) {
        this.nombre = nombre;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.nacionalidad = nacionalidad;

    }

    public getNombre(): string {
        return this.nombre;
    }
    public getDni(): number {
        return this.dni;
    }
    public getFechaNac(): string {
        return this.fechaNacimiento;
    }
    public getNacionalidad(): string {
        return this.nacionalidad;
    }


    public abstract imprimir();

}

class Dni extends docPersonal {
    private numTramite: number;

    public constructor(nombre: string, dni: number, fechaNacimiento: string, nacionalidad: string, numTramite: number) {
        super(nombre, dni, fechaNacimiento, nacionalidad);
        this.numTramite = numTramite;

    }
    public getNumTramite(): number {
        return this.numTramite;
    }
    public imprimir() {
        console.log("Su documento es:", this.getNombre(), this.getDni(), this.getFechaNac(), this.getNacionalidad(), this.getNumTramite())

    }

}
class Pasaporte extends docPersonal {
    private numPasaporte: number;
    //private numDocumento : Dni = new Dni("Ariel",232323,"23 de fdf","Argent", 23323);
    

    public constructor(nombre: string, dni: number, fechaNacimiento: string, nacionalidad: string, numPasaporte: number) {
        super(nombre, dni, fechaNacimiento, nacionalidad);
        this.numPasaporte = numPasaporte;

    }
    public getNumPasaporte(): number {
        return this.numPasaporte;
    }
    public imprimir() {
        console.log("Su Pasaporte es: ", this.getNumPasaporte())
        this.destino();
    }
    private destino(){
        console.log("Se autoriza viaje al mundial de Qatar")
    }
    

}

let pasaporte1 = new Pasaporte("Lucas", 3245454, "23 de Marzo", "Argentino", 465668);
let dni1 = new Dni("Ariel", 278983, "11 de Enero", "Argentino", 32323);

dni1.imprimir();
pasaporte1.imprimir();
