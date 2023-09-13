"use strict";
exports.__esModule = true;
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(danio, vida, nombre) {
        this.danio = danio;
        this.vida = vida;
        this.nombre = nombre;
    }
    Personaje.prototype.atacar = function (player) {
        player.setVida(player.getVida() - this.danio);
        console.log("".concat(this.nombre, " ataco con ").concat(this.danio, " puntos de da\u00F1o"));
        console.log("la vida de ".concat(player.getNombre(), " se redujo a ").concat(player.getVida()));
    };
    Personaje.prototype.curarse = function (cura) {
        this.vida += cura;
        console.log("".concat(this.nombre, " se curo ").concat(cura, " puntos de vida"));
    };
    Personaje.prototype.getDaño = function () {
        return this.danio;
    };
    Personaje.prototype.setDanio = function (danio) {
        this.danio = danio;
    };
    Personaje.prototype.getVida = function () {
        return this.vida;
    };
    Personaje.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return Personaje;
}());
exports.Personaje = Personaje;
