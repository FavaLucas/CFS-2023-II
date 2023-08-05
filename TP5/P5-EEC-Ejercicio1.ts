import * as rls from "readline-sync";

let xAlumnos: Alumno[] = []; //Inicializo mi Arreglo de Alumnos de tipo Clase Alumno en vacio
let xProfesores: Profesor[] = []; //Inicializo mi Arreglo de Profesores de tipo Clase Profesor en vacio
let escuela: Escuela;

class Alumno {
  private nombreAlumno: string;
  private idAlumno: number;
  private notaAlumno: number;

  public constructor(
    nombreAlumno: string,
    idAlumno: number,
    notaAlumno: number
  ) {
    this.nombreAlumno = nombreAlumno;
    this.idAlumno = idAlumno;
    this.notaAlumno = notaAlumno;
  }
  public setNombreAlumno(nombreAlumno: string): void {
    this.nombreAlumno = nombreAlumno;
  }
  public getNombreAlumno(): string {
    return this.nombreAlumno;
  }
  public setIdAlumno(idAlumno: number): void {
    this.idAlumno = idAlumno;
  }
  public getIdAlumno(): number {
    return this.idAlumno;
  }
  public setNotaAlumno(notaAlumno: number): void {
    this.notaAlumno = notaAlumno;
  }
  public getNotaAlumno(): void {
    if (this.notaAlumno >= 7) {
      console.log(
        "El alumno: ",
        this.nombreAlumno,
        "esta aprobado con: ",
        this.notaAlumno
      );
    } else {
      console.log(
        "El alumno: ",
        this.nombreAlumno,
        "esta desaprobado con: ",
        this.notaAlumno
      );
    }
  }
}

class Profesor {
  private nombreProfesor: string;
  private idProfesor: number;
  private estadoProfesor: boolean;
  private xAlumnos: Alumno[];

  constructor(
    nombreProfesor: string,
    idProfesor: number,
    estadoProfesor: boolean,
    xAlumnos: Alumno[]
  ) {
    this.nombreProfesor = nombreProfesor;
    this.idProfesor = idProfesor;
    this.estadoProfesor = estadoProfesor;
    this.xAlumnos = xAlumnos;
  }
  public setNombreProfesor(nombreProfesor: string): void {
    this.nombreProfesor = nombreProfesor;
  }
  public getNombreProfesor(): string {
    return this.nombreProfesor;
  }
  public setIdProfesor(idProfesor: number): void {
    this.idProfesor = idProfesor;
  }
  public getIdProfesor(): number {
    return this.idProfesor;
  }
  public setEstadoProfesor(estadoProfesor: boolean): void {
    this.estadoProfesor = estadoProfesor;
  }
  public getEstadoProfesor(): boolean {
    return this.estadoProfesor;
  }
  public setAlumnos(): void {
    this.xAlumnos = xAlumnos;
  }
  public getAlumnos(): Alumno[] {
    return this.xAlumnos;
  }
}

class Escuela {
  private nombreEscuela: string;
  private xComision: Alumno[];
  private xClaustroDocente: Profesor[];

  constructor(
    nombreEscuela: string,
    xComision: Alumno[], 
    xClaustroDocente: Profesor[]
  ) {
    this.nombreEscuela = nombreEscuela;
    this.xComision = xComision;
    this.xClaustroDocente = xClaustroDocente;
  }

  public setNombreEscuela(nombreEscuela: string): void {
    this.nombreEscuela = nombreEscuela;
  }
  public getNombreEscuela() {
    return this.nombreEscuela;
  }
  public setXComision(xComision: Alumno[]): void {
      this.xComision = xComision;
  }
  public getXComision(){
      return this.xComision;
  }
  public setXClaustroDocente(xClaustroDocente: Profesor[]): void {
    this.xClaustroDocente = xClaustroDocente;
  }
  public getXClaustroDocente() {
    return this.xClaustroDocente;
  }
}

//////////////////   Declaracion de Variables /////////////////

function cargarAlumnos() {
  let ingresaAlumno: boolean = true;
  let i: number = 0;
  while (ingresaAlumno) {
    console.log("");
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("  A continuacion agregara un Alumno a su Comision  ");
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("");
    let nombre: string = rls.question("Ingrese el Nombre del Alumno: ");
    let idAlumno: number = rls.question("Ingrese el ID del Alumno: ");
    let nota: number = rls.question("Ingrese la Nota del Alumno: ");
    xAlumnos[i] = new Alumno(nombre, idAlumno, nota);
    if (nota >= 7) {
      console.log("El Alumno esta Aprobado");
    } else {
      console.log("El Alumno esta Desaprobado");
    }
    i++;
    if (rls.question("Desea ingresar otro Alumno? (Si / No)") == "Si") {
        ingresaAlumno = true;
    } else {
        ingresaAlumno = false;
    }  
  }
  console.log("Ha finalizado la carga de sus alumnos");
  console.log("-------------------------------------");
  console.log("");
  console.log("");
  console.log("");
  //console.log("El curso lo conforman los alumnos: ", xAlumnos);
}
function cargarProfesores() {
  let ingresaProfesor: boolean = true;
  let i: number = 0;
  while (ingresaProfesor) {
    console.log("");
    console.log(
      "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
    );
    console.log(
      "  A continuacion agregara un Profesor a su Claustro Docente  "
    );
    console.log(
      "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
    );
    console.log("");
    let nombre: string = rls.question("Ingrese el Nombre de Profesor: ");
    let idProfesor: number = rls.question("Ingrese el ID de Profesor: ");
    let estado: boolean = rls.question("Ingrese el Estado de Actividad de Profesor(True o False)");
    xProfesores[i] = new Profesor(nombre, idProfesor, estado, xAlumnos);
    i++;
    if (rls.question("Desea ingresar otro Profesor? (Si / No)") == "Si") {
        ingresaProfesor = true;
    } else {
        ingresaProfesor = false;
    }
    // console.log("El curso lo conforman los profesores: ", xProfesores);
  }
  console.log("Ha finalizado la carga de sus profesores");
  console.log("----------------------------------------");
  console.log("");
  console.log("");
  console.log("");
}
function crearEscuela() {
  console.log("Ingrese el Nombre de la Escuela que desea crear: ");
  let nombreEscuela: string = rls.question();
  escuela = new Escuela(nombreEscuela,  xAlumnos, xProfesores);
  console.log("");
  console.log("");
  console.log("");
  console.log(
    "------------------------------------------------------------------------------------------------------"
  );
  console.log(
    "Con los Alumnos y los Profesores previamente cargados, su Escuela se conforma de la siguiente manera: ",
    escuela
  );
}

/////////////////// INICIO DEL PROGRAMA /////////////////
cargarAlumnos();
cargarProfesores();
crearEscuela();

