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
var NotificacionService = /** @class */ (function () {
    function NotificacionService() {
    }
    return NotificacionService;
}());
var EmailNotificacionService = /** @class */ (function (_super) {
    __extends(EmailNotificacionService, _super);
    function EmailNotificacionService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailNotificacionService.prototype.enviarNotificacion = function (mensaje, contacto) {
        if (contacto) {
            console.log("Se envia por correo a ".concat(contacto.getEmail(), ": ").concat(mensaje));
        }
    };
    return EmailNotificacionService;
}(NotificacionService));
var SmsNotificacionService = /** @class */ (function (_super) {
    __extends(SmsNotificacionService, _super);
    function SmsNotificacionService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmsNotificacionService.prototype.enviarNotificacion = function (mensaje, contacto) {
        if (contacto) {
            console.log("Se envia por sms a ".concat(contacto.getTel(), ": ").concat(mensaje));
        }
    };
    return SmsNotificacionService;
}(NotificacionService));
var Contacto = /** @class */ (function () {
    function Contacto(email, tel) {
        this.email = email;
        this.tel = tel;
    }
    Contacto.prototype.getEmail = function () {
        return this.email;
    };
    Contacto.prototype.getTel = function () {
        return this.tel;
    };
    return Contacto;
}());
var Usuario = /** @class */ (function () {
    function Usuario(nombreusuario) {
        this.nombreusuario = nombreusuario;
    }
    Usuario.prototype.getNombreUsuario = function () {
        return this.nombreusuario;
    };
    Usuario.prototype.getContacto = function () {
        return this.contacto;
    };
    Usuario.prototype.setContacto = function (contacto) {
        this.contacto = contacto;
    };
    return Usuario;
}());
var Empresa = /** @class */ (function () {
    function Empresa() {
    }
    Empresa.prototype.getEmail = function () {
        return 'empresa@gmail.com';
    };
    Empresa.prototype.getTel = function () {
        return '0888-265-4455';
    };
    return Empresa;
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
var AplicacionEmpresa = /** @class */ (function () {
    function AplicacionEmpresa(servicioNotificacion) {
        this.servicioNotificacion = servicioNotificacion;
    }
    AplicacionEmpresa.prototype.ejecutar = function (empresa) {
        this.servicioNotificacion.enviarNotificacion("Mensaje a empresa", empresa);
    };
    return AplicacionEmpresa;
}());
///      ----------------------------------------------
var not1 = new EmailNotificacionService();
var not2 = new SmsNotificacionService();
var usuario = new Usuario('ecavani');
var contacto1 = new Contacto('ecavani@gmail.com', '2284-555669');
usuario.setContacto(contacto1);
var aplicacion = new Aplicacion(not2);
aplicacion.ejecutar(usuario);
var aplicacionEmpresa = new AplicacionEmpresa(not1);
aplicacionEmpresa.ejecutar(new Empresa());
