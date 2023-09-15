export class Examen {
    private nota: number;

    constructor(nota: number) {

        this.nota = nota;
    }

    getNota(): number {
        return this.nota;
    }
}
