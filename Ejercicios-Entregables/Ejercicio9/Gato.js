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
exports.Gato = void 0;
var Animal_1 = require("./Animal");
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nombre, edad, raza, pelaje) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.pelaje = pelaje;
        return _this;
    }
    Gato.prototype.hacer_sonido = function () {
        console.log("".concat(this.nombre, " Miau* Miau*"));
    };
    Gato.prototype.moverse = function () {
        console.log('se mueve*');
    };
    Gato.prototype.Jugar = function (obj) {
        console.log("".concat(this.nombre, " esta jugando con ").concat(obj));
    };
    Gato.prototype.getPelaje = function () {
        return this.pelaje;
    };
    Gato.prototype.setPelaje = function (pelaje) {
        this.pelaje = pelaje;
    };
    return Gato;
}(Animal_1.Animal));
exports.Gato = Gato;
