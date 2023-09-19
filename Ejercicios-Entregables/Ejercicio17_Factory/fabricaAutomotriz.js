"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fabricaAutomotris = void 0;
var creadorAuto_1 = require("./creadorAuto");
var creadorCamioneta_1 = require("./creadorCamioneta");
var fabricaAutomotris = /** @class */ (function () {
    function fabricaAutomotris() {
    }
    fabricaAutomotris.prototype.crearVehiculo = function (tipoVehiculo, marca, modelo, cantidadAsientos, capacidadCarga) {
        var v;
        if (tipoVehiculo == "auto") {
            var creaAuto = new creadorAuto_1.creadorAuto(marca, modelo, cantidadAsientos, capacidadCarga);
            v = creaAuto.crearVehiculo();
            console.log("Se ha creado un auto de marca ".concat(marca, ", modelo ").concat(modelo, ", con ").concat(cantidadAsientos, " asientos y capacidad de carga de ").concat(capacidadCarga, " kg."));
            return v;
        }
        else if (tipoVehiculo == "camioneta") {
            var creaCamioneta = new creadorCamioneta_1.creadorCamioneta(marca, modelo, cantidadAsientos, capacidadCarga);
            v = creaCamioneta.crearVehiculo();
            console.log("Se ha creado una camioneta de marca ".concat(marca, ", modelo ").concat(modelo, ", con ").concat(cantidadAsientos, " asientos y capacidad de carga de ").concat(capacidadCarga, " kg."));
            return v;
        }
    };
    return fabricaAutomotris;
}());
exports.fabricaAutomotris = fabricaAutomotris;
