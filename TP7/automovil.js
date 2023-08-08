"use strict";
exports.__esModule = true;
exports.vehiculo = void 0;
var vehiculo = /** @class */ (function () {
    function vehiculo(tipo, patente, marca, modelo, anio) {
        this.tipo = tipo;
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    vehiculo.prototype.getTipo = function () {
        return this.tipo;
    };
    return vehiculo;
}());
exports.vehiculo = vehiculo;
