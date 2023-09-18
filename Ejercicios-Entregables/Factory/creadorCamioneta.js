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
exports.creadorCamioneta = void 0;
var creadorVehiculo_1 = require("./creadorVehiculo");
var camioneta_1 = require("./camioneta");
var creadorCamioneta = /** @class */ (function (_super) {
    __extends(creadorCamioneta, _super);
    function creadorCamioneta(marca, modelo, cantidadAsientos, capacidadCarga) {
        return _super.call(this, marca, modelo, cantidadAsientos, capacidadCarga) || this;
    }
    creadorCamioneta.prototype.crearVehiculo = function () {
        return new camioneta_1.Camioneta();
    };
    return creadorCamioneta;
}(creadorVehiculo_1.creadorvehiculo));
exports.creadorCamioneta = creadorCamioneta;
