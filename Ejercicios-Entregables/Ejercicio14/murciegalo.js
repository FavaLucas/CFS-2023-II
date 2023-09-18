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
Object.defineProperty(exports, "__esModule", { value: true });
exports.murciegalo = void 0;
var mamifero_1 = require("./mamifero");
var murciegalo = /** @class */ (function (_super) {
    __extends(murciegalo, _super);
    function murciegalo(nombre, edad, pelaje, habilidades) {
        var _this = _super.call(this, nombre, edad, pelaje) || this;
        _this.habilidades = habilidades;
        return _this;
    }
    murciegalo.prototype.utilizarEcolocalizacion = function () {
        console.log("El murciegalo ", this.nombre, "ha utilizado su ecolocalizacion y se ubico en su entorno.");
    };
    return murciegalo;
}(mamifero_1.mamifero));
exports.murciegalo = murciegalo;
