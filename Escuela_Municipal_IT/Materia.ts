import { Profesor } from "./Profesor";
import { Alumno } from "./Alumno";
import { Examen } from "./Examen";
import { Inscripto } from "./Inscripto";

export class Materia {
  private nombreMateria: string;
  private inscriptos: Inscripto[];
  private profesorACargo: Profesor;

  constructor(nombreMateria: string, profesorACargo: Profesor) {
    this.nombreMateria = nombreMateria;
    this.inscriptos = [];
    this.profesorACargo = profesorACargo
  }
  public getNombreMateria(): string {
    return this.nombreMateria;
  }
  public agregarInscriptos(alumno: Alumno) {
    this.inscriptos.push(new Inscripto(alumno));
  }
  public getProfesorACargo(): Profesor {
    return this.profesorACargo;
  }
  public agregarExamen(alumno: Alumno, nota: number) {
    //Este metodo busca el alumno y le agrega una nota;
    const auxExamen = this.inscriptos.findIndex((ins) => alumno.getNombre() == ins.getAlumno().getNombre());
    if (auxExamen >= 0) {
      //evaluar sacar en new Examen el this.nombreMateria
      this.inscriptos[auxExamen].agregarExamen(
        new Examen(nota)
      );
    } else {
      throw new Error("El alumno no se encuentra inscripto");
    }
  }
  public getAlumnoMateria(): Alumno[] {
    let alumnos: Alumno[] = [];
    this.inscriptos.forEach((element) => {
      alumnos.push(element.getAlumno());
    });
    return alumnos;
  }
  public imprimirPromediosxMateria() {
    this.inscriptos.forEach((inscripto) => {
        console.log("Promedio",inscripto.getAlumno().getNombre(), this.nombreMateria, inscripto.calcularPromedioPorMateria());
    });
  }
  public calcularPromedioPorAlumno (alumno: Alumnos): number {
    this.inscriptos.findIndex()
  }
}
