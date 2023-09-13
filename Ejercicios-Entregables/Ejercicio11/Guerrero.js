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
exports.Guerrero = void 0;
var Personaje_1 = require("./Personaje");
var Guerrero = /** @class */ (function (_super) {
    __extends(Guerrero, _super);
    function Guerrero(danio, vida, nombre, fuerza) {
        var _this = _super.call(this, danio, vida, nombre) || this;
        _this.fuerza = fuerza;
        return _this;
    }
    Guerrero.prototype.usarEscido = function () {
        console.log('Utilizo el escudo');
    };
    return Guerrero;
}(Personaje_1.Personaje));
exports.Guerrero = Guerrero;
