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
var docPersonal = /** @class */ (function () {
    function docPersonal(nombre, dni, fechaNacimiento, nacionalidad) {
        this.nombre = nombre;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.nacionalidad = nacionalidad;
    }
    docPersonal.prototype.getNombre = function () {
        return this.nombre;
    };
    docPersonal.prototype.getDni = function () {
        return this.dni;
    };
    docPersonal.prototype.getFechaNac = function () {
        return this.fechaNacimiento;
    };
    docPersonal.prototype.getNacionalidad = function () {
        return this.nacionalidad;
    };
    return docPersonal;
}());
var Dni = /** @class */ (function (_super) {
    __extends(Dni, _super);
    function Dni(nombre, dni, fechaNacimiento, nacionalidad, numTramite) {
        var _this = _super.call(this, nombre, dni, fechaNacimiento, nacionalidad) || this;
        _this.numTramite = numTramite;
        return _this;
    }
    Dni.prototype.getNumTramite = function () {
        return this.numTramite;
    };
    Dni.prototype.imprimir = function () {
        console.log("Su documento es:", this.getNombre(), this.getDni(), this.getFechaNac(), this.getNacionalidad(), this.getNumTramite());
    };
    return Dni;
}(docPersonal));
var Pasaporte = /** @class */ (function (_super) {
    __extends(Pasaporte, _super);
    //private numDocumento : Dni = new Dni("Ariel",232323,"23 de fdf","Argent", 23323);
    function Pasaporte(nombre, dni, fechaNacimiento, nacionalidad, numPasaporte) {
        var _this = _super.call(this, nombre, dni, fechaNacimiento, nacionalidad) || this;
        _this.numPasaporte = numPasaporte;
        return _this;
    }
    Pasaporte.prototype.getNumPasaporte = function () {
        return this.numPasaporte;
    };
    Pasaporte.prototype.imprimir = function () {
        console.log("Su Pasaporte es: ", this.getNumPasaporte());
        this.destino();
    };
    Pasaporte.prototype.destino = function () {
        console.log("Se autoriza viaje al mundial de Qatar");
    };
    return Pasaporte;
}(docPersonal));
var pasaporte1 = new Pasaporte("Lucas", 3245454, "23 de Marzo", "Argentino", 465668);
var dni1 = new Dni("Ariel", 278983, "11 de Enero", "Argentino", 32323);
dni1.imprimir();
pasaporte1.imprimir();
