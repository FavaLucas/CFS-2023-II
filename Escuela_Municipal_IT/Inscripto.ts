import { Alumno } from "./Alumno";
import { Examen } from "./Examen";

export class Inscripto {
  private alumno: Alumno;
  private examenes: Examen[];

  constructor(alumno: Alumno) {
    this.alumno = alumno;
    this.examenes = [];
  }
  public getAlumno(): Alumno {
    return this.alumno;
  }
//   public getSumaExamen(): number {
//     let sumaExamenes: number = 0;
//     this.examenes.forEach(examen => {
//         sumaExamenes += examen.getNota();
//     });
//     return sumaExamenes;
//   }
  public agregarExamen(examen: Examen) {
    this.examenes.push(examen);
  }
  public calcularPromedioPorMateria(): number {
    let notasTotales: number = 0;
    this.examenes.forEach((examen) => {notasTotales += examen.getNota();});
    return notasTotales / this.examenes.length;
  }
}

