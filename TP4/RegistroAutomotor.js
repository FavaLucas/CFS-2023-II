"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var Auto_1 = require("./Auto");
//armar las funciones consultar, eliminar, agregar, modificar
//sino agregar las instrucciones directo en el metodode la clase registro.
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombreRegistro) {
        this.nombreRegistro = nombreRegistro;
        this.registro = [];
    }
    RegistroAutomotor.prototype.getNombreRegistro = function () {
        return this.nombreRegistro;
    };
    RegistroAutomotor.prototype.setNombreRegistro = function (nombreRegistro) {
        this.nombreRegistro = nombreRegistro;
    };
    RegistroAutomotor.prototype.agregarAuto = function (auto) {
        this.registro.push(auto);
        console.log("Nuevo ingreso al Registo: ", auto);
    };
    RegistroAutomotor.prototype.mostrarRegistro = function () {
        console.log("Su registro cuenta con los siguientes autos: ");
        console.log(this.registro);
    };
    RegistroAutomotor.prototype.eliminarAutoPorPatente = function (patente) {
        for (var index = 0; index < this.registro.length; index++) {
            if (this.registro[index].getPatente() == patente) {
                this.registro.splice(index, 1);
                console.log("Se ha eliminado el Auto de su registro");
            }
        }
    };
    RegistroAutomotor.prototype.consultarPropietario = function (propietario) {
        for (var index = 0; index < this.registro.length; index++) {
            var encontrado = false;
            if (this.registro[index].getDueño() == propietario) {
                console.log("Registro encontrado: ", this.registro[index]);
                encontrado = true;
            }
            if (encontrado == false) {
                console.log("No se encontraron datos de ese propietario");
            }
        }
    };
    RegistroAutomotor.prototype.actualizarAuto = function (auto) {
        for (var index = 0; index < this.registro.length; index++) {
            if (this.registro[index] == auto) {
                this.registro[index].setDueño = rls.question("Ingrese dueño");
                this.registro[index].setMarca = rls.question("Ingrese marca");
                this.registro[index].setModelo = rls.question("Ingrese modelo");
                this.registro[index].setpatente = rls.question("Ingrese patente");
            }
            console.log("Los cambios se registraron: ", this.registro[index]);
        }
    };
    return RegistroAutomotor;
}());
function crearAuto() {
    var marca, dueño;
    var modelo, patente;
    marca = rls.question("Ingrese la marca de su auto: ");
    modelo = rls.questionInt("Ingrese el modelo (año) del auto: ");
    patente = rls.questionInt("Ingrese la patente del auto: ");
    dueño = rls.question("Ingrese el dueño del auto: ");
    var auto = new Auto_1.Auto(marca, modelo, patente, dueño, "");
    return auto;
}
//Inicio del programa
// revisar lo que tengo que pasar a funciones para no repetir codigo
console.log("");
var nombreRegistro = rls.question("Bienvenido! Ingrese el nombre de su nuevo Registro del Automotor: ");
console.log("");
var Registro = new RegistroAutomotor(nombreRegistro);
console.log("----------------------------------------------------------");
console.log("");
console.log("Felicitacionesse ha creado el Registro del Automotor: ", Registro.getNombreRegistro());
console.log("");
console.log("----------------------------------------------------------");
var nuevoIngreso = rls.question("Desea ingresar un auto a su registro? (y/n): ");
while (nuevoIngreso == "y") {
    var auto = crearAuto();
    Registro.agregarAuto(auto);
    nuevoIngreso = rls.question("Desea ingresar un nuevo auto?: (y/n): ");
}
console.log("----------------------------------------------------------");
Registro.mostrarRegistro();
console.log("-----------------------------------------------------------");
var elimiarAuto = rls.question("Desea elimiar algun auto del Registro? (y/n): ");
while (elimiarAuto == "y") {
    var patente = rls.questionInt("Ingrese el numero de patente del auto a eliminar: ");
    Registro.eliminarAutoPorPatente(patente);
    console.log("-----------------------------------------------------------");
    elimiarAuto = rls.question("Desea eliminar otro auto? (y/n): ");
}
console.log("-----------------------------------------------------------");
var consultarPropietario = rls.question("Desea consultar por algun auto del Registro? (y/n): ");
while (consultarPropietario == "y") {
    var propietario = rls.question("Ingrese el nombre del Propietario que desea consultar: ");
    Registro.consultarPropietario(propietario);
    console.log("-----------------------------------------------------------");
    consultarPropietario = rls.question("Desea consultar por otro auto? (y/n): ");
}
console.log("-----------------------------------------------------------");
Registro.actualizarAuto(new Auto_1.Auto("ford", 123, 123, "asd", ""));
