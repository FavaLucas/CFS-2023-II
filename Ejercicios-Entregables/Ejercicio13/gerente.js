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
exports.Gerente = void 0;
var empleado_1 = require("./empleado");
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nombre, apellido, salario, area) {
        var _this = _super.call(this, nombre, apellido, salario) || this;
        _this.area = area;
        return _this;
    }
    Gerente.prototype.asignarTarea = function (empleado, tarea) {
        console.log("Se le ha asigando al", empleado.getNombre(), "la siguiente tarea: ", tarea);
    };
    return Gerente;
}(empleado_1.Empleado));
exports.Gerente = Gerente;
