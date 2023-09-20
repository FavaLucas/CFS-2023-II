"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Materia = void 0;
var Examen_1 = require("./Examen");
var Inscripto_1 = require("./Inscripto");
var Materia = /** @class */ (function () {
    function Materia(nombreMateria, profesorACargo) {
        this.nombreMateria = nombreMateria;
        this.inscriptos = [];
        this.profesorACargo = profesorACargo;
    }
    Materia.prototype.getNombreMateria = function () {
        return this.nombreMateria;
    };
    Materia.prototype.agregarInscriptos = function (alumno) {
        this.inscriptos.push(new Inscripto_1.Inscripto(alumno));
    };
    Materia.prototype.getProfesorACargo = function () {
        return this.profesorACargo;
    };
    Materia.prototype.agregarExamen = function (alumno, nota) {
        //Este metodo busca el alumno y le agrega una nota;
        var auxExamen = this.inscriptos.findIndex(function (ins) { return alumno.getNombre() == ins.getAlumno().getNombre(); });
        if (auxExamen >= 0) {
            //evaluar sacar en new Examen el this.nombreMateria
            this.inscriptos[auxExamen].agregarExamen(new Examen_1.Examen(nota));
        }
        else {
            throw new Error("El alumno no se encuentra inscripto");
        }
    };
    Materia.prototype.getAlumnoMateria = function () {
        var alumnos = [];
        this.inscriptos.forEach(function (element) {
            alumnos.push(element.getAlumno());
        });
        return alumnos;
    };
    Materia.prototype.imprimirPromedios = function () {
        var _this = this;
        this.inscriptos.forEach(function (inscripto) {
            console.log("Promedio", inscripto.getAlumno().getNombre(), _this.nombreMateria, inscripto.calcularPromedioPorMateria());
        });
    };
    return Materia;
}());
exports.Materia = Materia;
