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
exports.reptil = void 0;
var animal_1 = require("./animal");
var reptil = /** @class */ (function (_super) {
    __extends(reptil, _super);
    function reptil(nombre, edad, escamas) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.escamas = escamas;
        return _this;
    }
    reptil.prototype.tempCorporal = function () {
        console.log(this.nombre, "regulo su temperatura.");
    };
    return reptil;
}(animal_1.Animal));
exports.reptil = reptil;
