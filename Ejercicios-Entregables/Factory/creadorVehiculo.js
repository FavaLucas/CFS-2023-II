"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creadorvehiculo = void 0;
var creadorvehiculo = /** @class */ (function () {
    function creadorvehiculo(marca, modelo, cantidadAsientos, capacidadCarga) {
        this.marca = marca;
        this.modelo = modelo;
        this.cantidadAsientos = cantidadAsientos;
        this.capacidadCarga = capacidadCarga;
    }
    creadorvehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    creadorvehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    creadorvehiculo.prototype.getCantidadDeAsientos = function () {
        return this.cantidadAsientos;
    };
    creadorvehiculo.prototype.getCapacidadDeCarga = function () {
        return this.capacidadCarga;
    };
    return creadorvehiculo;
}());
exports.creadorvehiculo = creadorvehiculo;
