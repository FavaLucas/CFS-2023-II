class Alumno {
    private dni: number;
    private nombre: string;
    private nota: number;
    private aprobado: boolean;

    public constructor(dni: number, nombre: string, nota: number) {
        this.dni = dni;
        this.nombre = nombre;
        this.nota = nota;
        if (nota >= 7)
            this.aprobado = true;
        else
            this.aprobado = false;
    }

    public estaAprobado(): boolean {
        if (this.nota >= 7)
            return true;
        else
            return false;

        //return this.aprobado;
    }

    public SetNota(nota: number): void{
        this.nota = nota;

        if (nota >= 7)
            this.aprobado = true;
        else
            this.aprobado = false;
    }

    public GetDNI(): number {
        return this.dni;
    }
}

class Profesor {
    private nombre: string;
    private materia: string;
    private activo: boolean;
    private alumnos: Alumno[];

    public constructor(nombre: string, materia: string, alumnos: Alumno[] ){
        this.nombre = nombre;
        this.materia = materia;
        this.alumnos = alumnos;
        this.activo = true;        
    }

    public GetNombre(): string {
            return this.nombre;
    }

    public estaActivo(): boolean {
        return this.activo;
    }

    public SetEstado(estado: boolean): void {
        this.activo = estado;
    }

    public asignarAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }

    public quitarAlumno(alumno: Alumno): void {
        for (let i: number = 0;  i < this.alumnos.length; i++) {
            if (this.alumnos[i].GetDNI() == alumno.GetDNI()) {
                this.alumnos.splice(i, 1);
                break;
            }
        }
    }

    public listarAlumnos(): void {
        console.log(this.alumnos);
    }
}

class Escuela {
    private nombre: string;
    private profesores: Profesor[];
    private alumnos: Alumno[];

    public constructor(nombre: string) {
        this.nombre = nombre;

        this.profesores = [];
        this.alumnos = [];
    }

///

    public matricularAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }

    public despedirAlumno(alumno: Alumno): void {
        for (let i: number = 0;  i < this.alumnos.length; i++) {
            if (this.alumnos[i].GetDNI() == alumno.GetDNI()) {
                this.alumnos.splice(i, 1);
                break;
            }
        }
    }

    public listarAlumnos(): void {
        console.log(this.alumnos);
    }

///
    public contratarProfesor(profesor: Profesor): void {
        this.profesores.push(profesor);
    }

    public despedirProfesor(profesor: Profesor): void {
        for (let i: number = 0;  i < this.profesores.length; i++) {
            if (this.profesores[i].GetNombre() == profesor.GetNombre()) {
                this.profesores[i].SetEstado(false);
                break;
            }
        }
    }

    public listarProfesores(): void {
        console.log(this.profesores);
    }

}



let miEscuela: Escuela = new Escuela("Escuela IT");

let alumno1: Alumno = new Alumno(111111, "Juan", 7);
let alumno2: Alumno = new Alumno(222222, "Maria", 8);
let alumno3: Alumno = new Alumno(333333, "Diego", 4);
let alumno4: Alumno = new Alumno(444444, "Andrea", 7);

let alumnosP1: Alumno[] = [alumno1, alumno2 ];
let profe1: Profesor = new Profesor("Jose", "POO", alumnosP1);

let alumnosP2: Alumno[] = [alumno3, alumno4 ];
let profe2: Profesor = new Profesor("Adriana", "Javascript", alumnosP2);

miEscuela.matricularAlumno(alumno1);
miEscuela.matricularAlumno(alumno2);
miEscuela.matricularAlumno(alumno3);
miEscuela.matricularAlumno(alumno4);

miEscuela.contratarProfesor(profe1);
miEscuela.contratarProfesor(profe2);

console.log("Listado de Alumnos");
miEscuela.listarAlumnos();

console.log("Listado de Profesores");
miEscuela.listarProfesores();
