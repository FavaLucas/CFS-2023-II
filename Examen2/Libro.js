"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Libro = void 0;
var ArticuloLectura_1 = require("./ArticuloLectura");
var Libro = /** @class */ (function (_super) {
    __extends(Libro, _super);
    function Libro(isbn, autor, editorial, titulo) {
        return _super.call(this, isbn, autor, editorial, titulo) || this;
    }
    //Redefinicion, implementacion del metodo setCantidadPaginas de la superclase.
    Libro.prototype.setCantidadPaginas = function (cantPaginas) {
        var paginas = false;
        if (cantPaginas > 0) {
            this.cantidadPaginas = cantPaginas;
            paginas = true;
            console.log("Se agrego un libro de ", this.cantidadPaginas, "paginas");
        }
        return paginas;
    };
    return Libro;
}(ArticuloLectura_1.ArticuloLectura));
exports.Libro = Libro;
