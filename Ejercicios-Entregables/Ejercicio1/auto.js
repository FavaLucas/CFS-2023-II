"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, duenio, patente) {
        this.marca = marca;
        this.duenio = duenio;
        this.patente = patente;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.getDuenio = function () {
        return this.duenio;
    };
    Auto.prototype.setDuenio = function (duenio) {
        this.duenio = duenio;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    return Auto;
}());
exports.Auto = Auto;
