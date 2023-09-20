"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombre) {
        this.nombre = nombre;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    return Alumno;
}());
exports.Alumno = Alumno;
