"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
var Profesor = /** @class */ (function () {
    function Profesor(nombre) {
        this.nombre = nombre;
    }
    Profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    return Profesor;
}());
exports.Profesor = Profesor;
