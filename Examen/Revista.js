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
exports.Revista = void 0;
var ArticuloLectura_1 = require("./ArticuloLectura");
var Revista = /** @class */ (function (_super) {
    __extends(Revista, _super);
    function Revista(isbn, autor, editorial, titulo, cantidadPaginas) {
        var _this = _super.call(this, isbn, autor, editorial, titulo, cantidadPaginas) || this;
        _this.articulos = [];
        return _this;
    }
    //Defino el metodo abstracto de la clase ArticuloLectura
    //Metedo setCantPaginas recibe por parameto la cantidad de paginas que tendra la revista para setearlo al atributo. Si es mayor a 50 no sera valido.
    Revista.prototype.setCantidadPaginas = function (cantidadPaginas) {
        if (cantidadPaginas > 50) {
            throw new Error("Supero la cantidad de paginas posibles del articulo");
            return false;
        }
        else {
            cantidadPaginas = cantidadPaginas;
            return true;
        }
    };
    return Revista;
}(ArticuloLectura_1.ArticuloLectura));
exports.Revista = Revista;
