"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var rls = require("readline-sync");
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = true;
        this.bateriaActual = 100;
    }
    Telefono.prototype.mandarMensaje = function () {
        var mensaje = rls.question("Ingrese el mensaje que desea enviar: ");
        console.log("Su mensaje (", mensaje, ") ha sido enviado con exito");
    };
    Telefono.prototype.hacerLlamada = function () {
        var numero = rls.questionInt("Ingrese el numero donde desea llamar: ");
        console.log("Llamando al: ", numero);
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
            console.log("Apagando su telefono");
        }
        else {
            this.estaPrendido = true;
            console.log("Encendiendo su telefono");
        }
    };
    return Telefono;
}());
exports.Telefono = Telefono;
