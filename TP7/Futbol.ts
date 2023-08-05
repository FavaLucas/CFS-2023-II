
class Persona {
    protected dni : number;
    protected nombre : string;
    protected edad : number;
    protected ocupacion : string;

    public constructor (dni:number, nombre:string, edad:number, ocupacion:string) {
        this.dni = dni;
        this.nombre = nombre;
        this.edad = edad;
        this.ocupacion = ocupacion;
    }
}

class Futbolista extends Persona {

    private posicion : string;
    private nroCamista : number;

    public constructor (dni:number, nombre:string, edad:number) {
        super(dni, nombre, edad, "Jugador de futbol"); 
    }

    public getPosicion(): string {
        return this.posicion;
    }

    public setPosicion(pos: string): void {
        this.posicion = pos;
    }
}

class Entrenador  extends Persona {
    public constructor (dni:number, nombre:string, edad:number) {
        super(dni, nombre, edad, "Entrenador"); 
    }
}

class Masajista extends Persona {
    public constructor (dni:number, nombre:string, edad:number) {
        super(dni, nombre, edad, "Masajista");
    }
}

class Equipo {
    
    private dt : Entrenador;
    private masajista : Masajista;
    private jugadores : Futbolista[];

    public constructor ( entrenador: Entrenador, masajista: Masajista ) {       
        this.dt = entrenador;
        this.masajista = masajista;
        this.jugadores = [];

        //this.dt = new Entrenador(0, "", 0);
        //this.masajista = new Masajista(0, "", 0);
    }

    public contratarEntrenador(entrenador: Entrenador) {
        this.dt = entrenador;
    }

    public contratarMasajista(masajista: Entrenador) {
        this.masajista = masajista;
    }

    public contratarJugador(jugador: Futbolista) {
        this.jugadores.push(jugador);
    }

    public despedirJugador(jugador: Futbolista) {
    }

    public listarJugadores() {
    }

    public listarJugadoresPorPosicion(pos: string) {
        for (let i = 0; i < this.jugadores.length; i++) {
            if (this.jugadores[i].getPosicion() == pos) {
                console.log(this.jugadores[i]);
            }
        }
    }

}



let dt = new Entrenador(1111111, "Coco Basile", 80);
let masa1 = new Masajista(22222, "Jose Velez", 58);
let equipoA = new Equipo(dt, masa1);

let jug1= new Futbolista(44444, "Bati", 45);
jug1.setPosicion("Delantero");
let jug2= new Futbolista(44444, "Messi", 36);
jug2.setPosicion("Delantero");
let jug3= new Futbolista(44444, "Romero", 30);
jug3.setPosicion("Defensor");

equipoA.contratarJugador(jug1);
equipoA.contratarJugador(jug2);
equipoA.contratarJugador(jug3);

console.log("-------------------------");
console.log("Equipo completo");
console.log("-------------------------");
console.log(equipoA);
console.log("-------------------------");

console.log("-------------------------");
console.log("Defensores");
console.log("-------------------------");
equipoA.listarJugadoresPorPosicion("Defensor");


