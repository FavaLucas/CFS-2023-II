import { Examen } from "./examen";
import { Alumno } from "./alumno";

export class Inscripto {
    private alumno: Alumno;
    private examenes: Examen[];

    public constructor(alumno: Alumno) {
        this.alumno = alumno;
        this.examenes = [];

    }

    agregarExamenRendido(examen: Examen) {
        this.examenes.push(examen);
    }

    calcularPromedio(): number {
        let notasTotales = 0;
        this.examenes.forEach((ex) => {
            notasTotales += ex.getNota();
        })
        return notasTotales / this.examenes.length;
    }


}
