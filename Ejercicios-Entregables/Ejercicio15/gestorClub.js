"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorClub = void 0;
var fs = require("fs");
var path = require("path");
var rls = require("readline-sync");
var jugador_1 = require("./jugador");
var GestorClub = /** @class */ (function () {
    function GestorClub(nombreDelClub) {
        this.path = path.resolve("./legajoSocios.json");
        this.nombreDelClub = nombreDelClub;
        this.sociosDelClub = [];
    }
    // public guardarInformacion(socio: Jugador): void {
    //   const fileDescriptor = fs.openSync(this.path, 'a'); 
    //   fs.appendFileSync(fileDescriptor, `${JSON.stringify(socio)}\n`, {encoding: 'utf8', flag: 'a'});
    //   fs.closeSync(fileDescriptor); // Cierra el archivo
    // }
    GestorClub.prototype.guardarInformacion = function (socio) {
        this.sociosDelClub.push(socio);
        fs.writeFileSync(this.path, "".concat(JSON.stringify(this.sociosDelClub, null, 2)));
    };
    GestorClub.prototype.altaDeSocio = function () {
        var nombre = rls.question("Ingrese el nombre del socio: ");
        var apellido = rls.question("Ingrese el apellido del socio: ");
        var fechaNaciomiento = rls.question("Ingrese el fecha de nacimiento del socio: ");
        var documento = rls.question("Ingrese el documento del socio: ");
        var telefono = rls.question("Ingrese el telefono del socio: ");
        var miembroDesde = rls.question("Ingrese el miembro desde: ");
        var deporte = rls.question("Futbol = 0, Tenis = 1, Natacion = 2: ");
        this.guardarInformacion(new jugador_1.Jugador(nombre, apellido, fechaNaciomiento, documento, telefono, miembroDesde, deporte));
    };
    return GestorClub;
}());
exports.GestorClub = GestorClub;
