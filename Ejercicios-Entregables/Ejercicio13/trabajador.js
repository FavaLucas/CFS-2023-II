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
exports.Trabajador = void 0;
var empleado_1 = require("./empleado");
var Trabajador = /** @class */ (function (_super) {
    __extends(Trabajador, _super);
    function Trabajador(nombre, apellido, salario, horasTrabajadas) {
        var _this = _super.call(this, nombre, apellido, salario) || this;
        _this.horasTrabajadas = horasTrabajadas;
        return _this;
    }
    Trabajador.prototype.solicitarDiaLibre = function (dia) {
        console.log("Se ha solicitado el día", dia, "franco para el trabajador.");
    };
    return Trabajador;
}(empleado_1.Empleado));
exports.Trabajador = Trabajador;
