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
exports.EmpleadoTemporal = void 0;
var trabajador_1 = require("./trabajador");
var EmpleadoTemporal = /** @class */ (function (_super) {
    __extends(EmpleadoTemporal, _super);
    function EmpleadoTemporal(nombre, apellido, salario, horasTrabajadas, fechaFinContrato) {
        var _this = _super.call(this, nombre, apellido, salario, horasTrabajadas) || this;
        _this.fechaFinContrato = fechaFinContrato;
        return _this;
    }
    EmpleadoTemporal.prototype.verificarVencimientoContrato = function (fecha) {
        var auxFec = Date.parse(fecha);
        var auxFinContrato = Date.parse(this.fechaFinContrato);
        if (auxFinContrato > auxFec) {
            console.log("Aun su contrato sigue vigente");
            return true;
        }
        else {
            console.log("Su contrato se ha acabado");
            return false;
        }
    };
    return EmpleadoTemporal;
}(trabajador_1.Trabajador));
exports.EmpleadoTemporal = EmpleadoTemporal;
