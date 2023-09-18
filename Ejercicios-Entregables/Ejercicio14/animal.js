"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Animal.prototype.comer = function () {
        console.log(this.nombre, "se ha puesto a comer.");
    };
    Animal.prototype.dormir = function () {
        console.log(this.nombre, "se acosto a dormir.");
    };
    return Animal;
}());
exports.Animal = Animal;
