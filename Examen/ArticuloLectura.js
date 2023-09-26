"use strict";
exports.__esModule = true;
exports.ArticuloLectura = void 0;
var ArticuloLectura = /** @class */ (function () {
    function ArticuloLectura(isbn, autor, editorial, titulo, cantidadPaginas) {
        this.isbn = isbn;
        this.autor = autor;
        this.editorial = editorial;
        this.titulo = titulo;
        this.cantidadPaginas = cantidadPaginas;
    }
    ArticuloLectura.prototype.getIsbn = function () {
        return this.isbn;
    };
    ArticuloLectura.prototype.setIsbn = function (isbn) {
        this.isbn = isbn;
    };
    ArticuloLectura.prototype.getAutor = function () {
        return this.autor;
    };
    ArticuloLectura.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    ArticuloLectura.prototype.getEditorial = function () {
        return this.editorial;
    };
    ArticuloLectura.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    ArticuloLectura.prototype.getTitulo = function () {
        return this.titulo;
    };
    ArticuloLectura.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    return ArticuloLectura;
}());
exports.ArticuloLectura = ArticuloLectura;
