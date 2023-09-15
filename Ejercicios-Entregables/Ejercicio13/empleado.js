"use strict";
exports.__esModule = true;
exports.Empleado = void 0;
var Empleado = /** @class */ (function () {
    function Empleado(nombre, apellido, salario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.salario = salario;
    }
    Empleado.prototype.getNombre = function () {
        return this.nombre;
    };
    Empleado.prototype.getSalario = function () {
        return this.salario;
    };
    Empleado.prototype.setSalario = function (salario) {
        this.salario = salario;
    };
    Empleado.prototype.aumentarSalario = function (trabajador, porcentaje) {
        trabajador.setSalario(trabajador.getSalario() + (trabajador.getSalario() * porcentaje) / 100);
        console.log("Se le ha aumenta el salario al ", trabajador.getNombre(), "en un ", porcentaje, "%");
        console.log("Su nuevo salario es de: ", trabajador.getSalario());
    };
    Empleado.prototype.reducirSalario = function (trabajador, porcentaje) {
        trabajador.setSalario(trabajador.getSalario() - (trabajador.getSalario() * porcentaje) / 100);
        console.log("Se le ha reducido el salario al ", trabajador.getNombre(), "en un ", porcentaje, "%");
        console.log("Su nuevo salario es de: ", trabajador.getSalario());
    };
    return Empleado;
}());
exports.Empleado = Empleado;
