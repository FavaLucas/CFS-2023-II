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
exports.Pajaro = void 0;
var Animal_1 = require("./Animal");
var Pajaro = /** @class */ (function (_super) {
    __extends(Pajaro, _super);
    function Pajaro(nombre, edad, raza, tipo_de_pico) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.tipo_de_pico = tipo_de_pico;
        return _this;
    }
    Pajaro.prototype.hacer_sonido = function () {
        console.log("".concat(this.nombre, " Miau* Miau*"));
    };
    Pajaro.prototype.moverse = function () {
        console.log('se mueve*');
    };
    Pajaro.prototype.volar = function () {
        console.log("".concat(this.nombre, " se fue volando"));
    };
    Pajaro.prototype.getTipo_de_pico = function () {
        return this.tipo_de_pico;
    };
    Pajaro.prototype.setTipo_de_pico = function (tipo_de_pico) {
        this.tipo_de_pico = tipo_de_pico;
    };
    return Pajaro;
}(Animal_1.Animal));
exports.Pajaro = Pajaro;
