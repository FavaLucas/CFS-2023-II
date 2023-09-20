"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inscripto = void 0;
var Inscripto = /** @class */ (function () {
    function Inscripto(alumno) {
        this.alumno = alumno;
        this.examenes = [];
    }
    Inscripto.prototype.getAlumno = function () {
        return this.alumno;
    };
    //   public getSumaExamen(): number {
    //     let sumaExamenes: number = 0;
    //     this.examenes.forEach(examen => {
    //         sumaExamenes += examen.getNota();
    //     });
    //     return sumaExamenes;
    //   }
    Inscripto.prototype.agregarExamen = function (examen) {
        this.examenes.push(examen);
    };
    Inscripto.prototype.calcularPromedioPorMateria = function () {
        var notasTotales = 0;
        this.examenes.forEach(function (examen) { notasTotales += examen.getNota(); });
        return notasTotales / this.examenes.length;
    };
    return Inscripto;
}());
exports.Inscripto = Inscripto;
