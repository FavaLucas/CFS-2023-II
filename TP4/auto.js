"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var rls = require("readline-sync");
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, patente, dueño, estado) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.dueño = dueño;
        this.estado = estado;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setpatente = function (patente) {
        this.patente = patente;
    };
    Auto.prototype.getDueño = function () {
        return this.dueño;
    };
    Auto.prototype.setDueño = function (dueño) {
        this.dueño = dueño;
    };
    Auto.prototype.getEstado = function () {
        return this.estado;
    };
    Auto.prototype.setEstado = function (estado) {
        this.estado = estado;
    };
    Auto.prototype.encenderAuto = function () {
        this.estado == "Encendido";
        console.log(this.dueño, "su auto se a encendido");
    };
    Auto.prototype.apagarAuto = function () {
        this.estado == "Apagado";
        console.log(this.dueño, "su auto se a apagado");
    };
    Auto.prototype.acelerarAuto = function (aceleracion) {
        console.log(this.dueño, "La acelaracion de su auto es de 30km/h");
    };
    Auto.prototype.frenarAuto = function () {
        console.log(this.dueño, "Su auto ha frenado");
    };
    return Auto;
}());
exports.Auto = Auto;
function crearAuto() {
    var marca, dueño;
    var modelo, patente;
    marca = rls.question("Ingrese la marca de su auto: ");
    modelo = rls.questionInt("Ingrese el modelo (año) del auto: ");
    patente = rls.questionInt("Ingrese la patente del auto: ");
    dueño = rls.question("Ingrese el dueño del auto: ");
    var auto = new Auto(marca, modelo, patente, dueño, "");
    return auto;
}
//let auto1 = new Auto("Ford", 2018, 41234, "Lucas Fava", "");
//let auto2 = new Auto("Toyota", 2022, 7456, "Daniel Somoza", "");
//let auto3 = new Auto("Volkswagen", 2016, 91823, "Kevin Frias", "");
//let auto4 = new Auto("Peugeot", 2020, 123092, "Lorena Planes", "");
//auto1.encenderAuto();
//auto3.apagarAuto();
//auto2.acelerarAuto(30);
//auto2.frenarAuto();
//let auto5 = crearAuto();
//console.log(auto5);
