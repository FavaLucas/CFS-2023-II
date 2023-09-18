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
exports.Influencer = void 0;
var usuario_1 = require("./usuario");
var Influencer = /** @class */ (function (_super) {
    __extends(Influencer, _super);
    function Influencer(nombre, email, contraseña, numeroDeSeguidores) {
        var _this = _super.call(this, nombre, email, contraseña) || this;
        _this.numeroDeSeguidores = numeroDeSeguidores;
        return _this;
    }
    Influencer.prototype.realizarColaboracion = function (colaborador) {
        console.log(" El influencer ".concat(this.nombre, " el cual tiene ").concat(this.numeroDeSeguidores, " realizara una colaboracion con ").concat(colaborador.getNombre()));
    };
    return Influencer;
}(usuario_1.Usuario));
exports.Influencer = Influencer;
