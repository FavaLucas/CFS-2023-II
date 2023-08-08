class Persona {
  private nombre: string;
  private dni: number;
  private edad: number;
  private ocupacion: string;
    
    public constructor(nombre: string, dni: number, edad: number, ocupacion: string){
    this.nombre = nombre
    this.dni = dni
    this.edad = edad
    this.ocupacion = ocupacion
}
    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getDni(): number {
        return this.dni;
    }

    public setDni(dni: number): void {
        this.dni = dni;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public getOcupacion(): string {
        return this.ocupacion;
    }

    public setOcupacion(ocupacion: string): void {
        this.ocupacion = ocupacion;
    }
}

class Futbolista extends Persona{
    private posicion: string;
    private numero: number;

    public constructor(nombre: string, dni: number, edad: number){
        super(nombre, dni, edad, "Entrenador");
    }
    public getPosicion (): string {
        return this.posicion;
    }
    public setPosicion (posicion: string): void{
        this.posicion = posicion;
    }

}
class Entrenador extends Persona {
    public constructor(nombre: string, dni: number, edad: number){
        super(nombre, dni, edad, "Entrenador");
    }

}
class Masajista extends Persona {
    public constructor(nombre: string, dni: number, edad: number){
        super(nombre, dni, edad, "Masajista");
    }
}

class Equipo {
    private dt: Entrenador;
    private masajista: Masajista;
    private jugadores: Futbolista[];

    public constructor (entrenador: Entrenador, masajista: Masajista) {
       this.dt = entrenador;
       this.masajista = masajista;
    }

    public contratarEntrenador (entrenador: Entrenador){
        this.dt = entrenador;      
    }
    public contratarMasajista (masajista: Masajista){
        this.dt = masajista;      
    }
    public contratarJugador (jugador: Futbolista){
        this.jugadores.push(jugador);      
    }

    public despedirJugador (jugador: Futbolista){
        //this.jugadores.push(jugador);      
    }
    public listarJugadores (){
        //un imprimir arreglo
    }
    public listarJugadoresPorPosicion (posicion : string){
        //un  buscar por posicion
    }


}


let dt = new Entrenador("Jose Lopez", 31359156, 36);
let masajista = new Masajista("Raul Estevez", 26504635, 49);
let equipo = new Equipo(dt, masajista);

let jug1 = new Futbolista("Gabriel Batistuta", 32185321, 36);
let jug2 = new Futbolista("Lionel Messi", 3516541, 34);

equipo.contratarJugador(jug1);
equipo.contratarJugador(jug2);
