"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nombre, email, contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    Usuario.prototype.publicarPost = function (post) {
        console.log("".concat(this.nombre, " publico el siguiente post:"), post);
    };
    Usuario.prototype.comentarPost = function (comentar) {
        console.log("".concat(this.nombre, " realizo  el siguiente comentario:"), comentar);
    };
    return Usuario;
}());
exports.Usuario = Usuario;
