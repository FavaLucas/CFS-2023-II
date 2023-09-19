"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliPlatino = void 0;
var CliPlatino = /** @class */ (function () {
    function CliPlatino() {
    }
    //descuento 20% a todo
    CliPlatino.prototype.comprarProducto = function (precio) {
        return precio * 0.8;
    };
    return CliPlatino;
}());
exports.CliPlatino = CliPlatino;
