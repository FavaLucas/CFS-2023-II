import { Inscripto } from "./Inscripto";

export class Asignatura {
    private nombre: string;
    inscriptos: Inscripto[]

    public constructor(nombre: string) {
        this.nombre = nombre;
        this.inscriptos = [];
    }

    agregarInscripto(inscripto: Inscripto) {
        this.inscriptos.push(inscripto);
    }

    calcularPromedio(): number {
        let notasTotales = 0;
        this.inscriptos.forEach((ex) => {
            notasTotales += ex.calcularPromedio();
        })
        return notasTotales / this.inscriptos.length;
    }

}
