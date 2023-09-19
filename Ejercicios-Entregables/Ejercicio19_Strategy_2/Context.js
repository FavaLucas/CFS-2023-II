"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
var Context = /** @class */ (function () {
    function Context() {
    }
    Context.prototype.setEstrategia = function (cliente) {
        this.cliente = cliente;
    };
    Context.prototype.aplicarEstrategia = function (precio) {
        return this.cliente.comprarProducto(precio);
    };
    return Context;
}());
exports.Context = Context;
