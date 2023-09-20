import { Profesor } from "./Profesor";
import { Alumno } from "./Alumno";
import { Examen } from "./Examen";
import { Inscripto } from "./Inscripto";
import { Materia } from "./Materia";

export class Gestor_de_Legajos {
  private alumnos: Alumno[];
  private materias: Materia[];
  private profesores: Profesor[];

  constructor() {
    this.alumnos = [];
    this.materias = [];
    this.profesores = [];
  }
  public agregarAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }
  public agregarMateria(materia: Materia) {
    this.materias.push(materia);
  }
  public agregarProfesor(profesor: Profesor) {
    this.profesores.push(profesor);
  }
  public getAlumnos(): Alumno[] {
    return this.alumnos;
  }
  public getMaterias(): Materia[] {
    return this.materias;
  }
  public getProfesor(): Profesor[] {
    return this.profesores;
  }
   calcularPromedioPorAlumno(almuno: Alumno): number {
     let notasTotales = 0;
     let cantPromedios = 0;
     this.materias.forEach(element => {
        
     });
     if (cantPromedios > 0) {
       return notasTotales / cantPromedios;
     }
     throw new Error("El alumno no tiene examenes");
   }

}
