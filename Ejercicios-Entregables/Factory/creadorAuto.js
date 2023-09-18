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
exports.creadorAuto = void 0;
var creadorVehiculo_1 = require("./creadorVehiculo");
var auto_1 = require("./auto");
var creadorAuto = /** @class */ (function (_super) {
    __extends(creadorAuto, _super);
    function creadorAuto(marca, modelo, cantidadAsientos, capacidadCarga) {
        return _super.call(this, marca, modelo, cantidadAsientos, capacidadCarga) || this;
    }
    creadorAuto.prototype.crearVehiculo = function () {
        return new auto_1.Auto();
    };
    return creadorAuto;
}(creadorVehiculo_1.creadorvehiculo));
exports.creadorAuto = creadorAuto;
