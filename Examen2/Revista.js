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
    function Revista(isbn, autor, editorial, titulo) {
        var _this = _super.call(this, isbn, autor, editorial, titulo) || this;
        _this.articulos = [];
        return _this;
    }
    //Redefinicion, implementacion del metodo setCantidadPaginas de la superclase.
    //Si el parametro de entrada es superior a 50 no se puede crear el articulo y se retorna false.
    //Si el parametro de entrada es menor o igual a 50, se creara el articulo.
    Revista.prototype.setCantidadPaginas = function (cantPaginas) {
        try {
            var paginas = false;
            if (cantPaginas > 50) {
                throw new Error("No se pudo crear el articulo ya que supera las 50 paginas");
            }
            else {
                this.cantidadPaginas = cantPaginas;
                paginas = true;
                console.log("Se agrego una revista de ", this.cantidadPaginas, "paginas");
            }
            return paginas;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    };
    return Revista;
}(ArticuloLectura_1.ArticuloLectura));
exports.Revista = Revista;
