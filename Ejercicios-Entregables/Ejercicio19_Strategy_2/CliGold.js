"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliGold = void 0;
var CliGold = /** @class */ (function () {
    function CliGold() {
    }
    //descuento 20% producto mayores a 10k
    CliGold.prototype.comprarProducto = function (precio) {
        if (precio > 10000) {
            return precio * 0.8;
        }
        return precio;
    };
    return CliGold;
}());
exports.CliGold = CliGold;
