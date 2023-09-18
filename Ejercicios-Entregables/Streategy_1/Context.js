"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
var Context = /** @class */ (function () {
    function Context() {
    }
    Context.prototype.setEstrategia = function (transaccion) {
        return transaccion.convertirMoneda();
    };
    return Context;
}());
exports.Context = Context;
