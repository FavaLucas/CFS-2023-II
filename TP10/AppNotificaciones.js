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
var ServicioDeNotificaciones = /** @class */ (function () {
    function ServicioDeNotificaciones() {
    }
    return ServicioDeNotificaciones;
}());
var EmailNotificacionService = /** @class */ (function (_super) {
    __extends(EmailNotificacionService, _super);
    function EmailNotificacionService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailNotificacionService.prototype.enviarNotificacion = function (mensaje, contacto) {
        if (contacto) {
            console.log("Se ha enviado su notificacion por email a ".concat(contacto.getEmail(), ": ").concat(mensaje));
        }
    };
    return EmailNotificacionService;
}(ServicioDeNotificaciones));
var SmsNotificacionService = /** @class */ (function (_super) {
    __extends(SmsNotificacionService, _super);
    function SmsNotificacionService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmsNotificacionService.prototype.enviarNotificacion = function (mensaje, contacto) {
        if (contacto) {
            console.log("Se ha enviado su notificacion por SMS a ".concat(contacto.getTel(), ": ").concat(mensaje));
        }
    };
    return SmsNotificacionService;
}(ServicioDeNotificaciones));
var Contacto = /** @class */ (function () {
    function Contacto(email, telefono) {
        this.email = email;
        this.telefono = telefono;
    }
    Contacto.prototype.getEmail = function () {
        return this.email;
    };
    Contacto.prototype.getTel = function () {
        return this.telefono;
    };
    return Contacto;
}());
var Usuario = /** @class */ (function () {
    function Usuario(nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }
    Usuario.prototype.getNombreUsuario = function () {
        return this.nombreUsuario;
    };
    Usuario.prototype.getContacto = function () {
        return this.contacto;
    };
    Usuario.prototype.setContacto = function (contacto) {
        this.contacto = contacto;
    };
    return Usuario;
}());
var Aplicacion = /** @class */ (function () {
    function Aplicacion(servicioNotificacion) {
        this.servicioNotificacion = servicioNotificacion;
    }
    Aplicacion.prototype.ejecutar = function (usuario) {
        this.servicioNotificacion.enviarNotificacion("Hola ".concat(usuario.getNombreUsuario(), " se ejecuta tu APP"), usuario.getContacto());
    };
    return Aplicacion;
}());
var Notificacion1 = new EmailNotificacionService();
var Notificacion2 = new SmsNotificacionService();
var usuario1 = new Usuario("Lucas Fava");
var contacto1 = new Contacto("lucasfava86@gmail.com", 2216212552);
usuario1.setContacto(contacto1);
var aplicacion = new Aplicacion(Notificacion2);
aplicacion.ejecutar(usuario1);
