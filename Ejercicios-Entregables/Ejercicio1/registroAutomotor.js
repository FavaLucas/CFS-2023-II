"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var rls = require("readline-sync");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.registroAutomotor = [];
    }
    //consultar/borrar/actualizar/Agregar
    RegistroAutomotor.prototype.agregarAuto = function (auto) {
        this.registroAutomotor.push(auto);
        console.log("Se agrego el automovil al registro automotor el vehiculo con dominio: ".concat(auto.getPatente()));
    };
    RegistroAutomotor.prototype.consultasPatente = function (patente) {
        var esta = false;
        for (var i = 0; i < this.registroAutomotor.length; i++) {
            if (this.registroAutomotor[i].getPatente() === patente) {
                console.log("Su auto con dominio ".concat(patente, " se encuentra en el registro."));
                esta = true;
                break;
            }
        }
        if (!esta) {
            console.log("Su auto con dominio ".concat(patente, " no encuentra en el registro."));
        }
    };
    RegistroAutomotor.prototype.transferirAuto = function (duenio) {
        console.log(duenio, "se va a transferir tu vehiculo.");
        var nuevoDuenio = rls.question("Ingrese el nombre del nuevo propietario: ");
        for (var i = 0; i < this.registroAutomotor.length; i++) {
            if (this.registroAutomotor[i].getDuenio() === duenio) {
                this.registroAutomotor[i].setDuenio(nuevoDuenio);
                console.log("Se ha transferido con exito su vehiculo.");
                console.log("El nuevo propietario del vehiculo es: ", nuevoDuenio);
                break;
            }
            else {
                console.log("No se encontro el titular ", duenio, " en el registro automotor");
            }
        }
    };
    RegistroAutomotor.prototype.eliminarAuto = function (patente) {
        for (var i = 0; i < this.registroAutomotor.length; i++) {
            if (this.registroAutomotor[i].getPatente() === patente) {
                this.registroAutomotor.splice(i, 1);
                console.log("Se ha eliminado el vehiculo de dominio ", patente, "del registro");
                break;
            }
        }
    };
    RegistroAutomotor.prototype.imprimirRegistro = function () {
        console.log(this.registroAutomotor);
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
