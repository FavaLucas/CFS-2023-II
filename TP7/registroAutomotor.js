"use strict";
exports.__esModule = true;
var auto_1 = require("./auto");
var camion_1 = require("./camion");
var moto_1 = require("./moto");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.vehiculos = [];
    }
    RegistroAutomotor.prototype.darDeAlta = function (auto) {
        this.vehiculos.push(auto);
    };
    RegistroAutomotor.prototype.listar = function () {
        console.log("Lista de Automotores");
        console.log("----------------------------------------------------------");
        this.vehiculos.forEach(function (auto, indice) {
            console.log("".concat(indice + 1, " - ").concat(auto.getTipo(), " -").concat(auto.getMarca(), " ").concat(auto.getModelo(), " (").concat(auto.getAnio(), ") Patente: ").concat(auto.getPatente()));
        });
        console.log();
        console.log();
    };
    RegistroAutomotor.prototype.actualizar = function (auto) {
        var indiceAuto = -1;
        for (var index = 0; index < this.vehiculos.length; index++) {
            var autoActual = this.vehiculos[index];
            if (autoActual.getPatente() == auto.getPatente()) {
                indiceAuto = index;
            }
        }
        if (indiceAuto >= 0) {
            this.vehiculos[indiceAuto] = auto;
        }
    };
    // implementar el eliminar!!
    RegistroAutomotor.prototype.eliminar = function (patente) {
        var indiceAuto = -1;
        for (var index = 0; index < this.vehiculos.length; index++) {
            var autoActual = this.vehiculos[index];
            if (autoActual.getPatente() === patente) {
                this.vehiculos.splice(index, 1);
            }
        }
    };
    return RegistroAutomotor;
}());
console.clear();
var ra = new RegistroAutomotor();
var auto1 = new moto_1.Moto('AB654RO', 'Ford', 'Focus', 2018);
ra.darDeAlta(auto1);
ra.darDeAlta(new auto_1.Auto('AB654RQ', 'Ford', 'Fairline', 2019));
ra.darDeAlta(new auto_1.Auto('AB444RQ', 'Nissan', 'Sentra', 2016));
ra.darDeAlta(new auto_1.Auto('AB699RQ', 'Mazda', 'Zrx', 2014));
ra.darDeAlta(new auto_1.Auto('BB654RQ', 'Audi', 'A3', 2019));
ra.darDeAlta(new auto_1.Auto('AF636RQ', 'Fiat', 'Chronos', 2023));
ra.listar();
ra.actualizar(new auto_1.Auto('AB699RQ', 'Mazda', 'Sirocco', 2015));
ra.listar();
ra.eliminar('AB654RO');
ra.listar();
ra.darDeAlta(new auto_1.Auto('AZ699RQ', 'Mazzzda', 'Zrxz', 2018));
ra.darDeAlta(new camion_1.Camion('camasdasion', 'Auudi', 'A33', 2049));
ra.listar();
ra.darDeAlta(new moto_1.Moto('moasdasdto', 'Yamaha', '2017', 450));
ra.listar();
