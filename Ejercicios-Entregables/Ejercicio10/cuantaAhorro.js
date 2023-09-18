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
exports.CuentaAhorro = void 0;
var cuenta_1 = require("./cuenta");
var CuentaAhorro = /** @class */ (function (_super) {
    __extends(CuentaAhorro, _super);
    function CuentaAhorro(id, saldo, titular, interes) {
        var _this = _super.call(this, id, saldo, titular) || this;
        _this.interes = interes;
        return _this;
    }
    CuentaAhorro.prototype.calcularInteres = function (saldoAux) {
        saldoAux = saldoAux * 1.97;
        console.log("Depositando: $", saldoAux, ",Su saldo con interes seria de: $", saldoAux);
    };
    return CuentaAhorro;
}(cuenta_1.Cuenta));
exports.CuentaAhorro = CuentaAhorro;
