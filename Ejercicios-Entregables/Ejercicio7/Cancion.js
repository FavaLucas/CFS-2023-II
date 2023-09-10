"use strict";
exports.__esModule = true;
exports.Cancion = void 0;
var Cancion = /** @class */ (function () {
    function Cancion(titulo, autor) {
        if (!titulo && !autor) {
            this.titulo = "";
            this.autor = "";
        }
        else if (titulo && autor) {
            this.titulo = titulo;
            this.autor = autor;
        }
    }
    Cancion.prototype.mostrarTitulo = function () {
        return this.titulo;
    };
    Cancion.prototype.mostrarAutor = function () {
        return this.autor;
    };
    Cancion.prototype.ponerTitulo = function (nuevoTitulo) {
        this.titulo = nuevoTitulo;
    };
    Cancion.prototype.ponerAutor = function (nuevoAutor) {
        this.autor = nuevoAutor;
    };
    return Cancion;
}());
exports.Cancion = Cancion;
