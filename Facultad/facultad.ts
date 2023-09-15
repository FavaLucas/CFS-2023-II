import { Alumno } from "./alumno";
import { Asignatura } from "./asignatura";

export class Facultad {
    private alumnos: Alumno[];
    private asignaturas: Asignatura[];

    constructor() {
        this.alumnos = [];
        this.asignaturas = [];
    }

    agregarAsignatura(asignatura: Asignatura) {
        this.asignaturas.push(asignatura);
    }

    agregarAlumno(alumno: Alumno) {
        this.alumnos.push(alumno);
    }

    calcularPromedioTotal(): number {
        let notasTotales = 0;
        this.asignaturas.forEach((ex) => {
            notasTotales += ex.calcularPromedio();
        })
        return notasTotales / this.asignaturas.length;
    }
}