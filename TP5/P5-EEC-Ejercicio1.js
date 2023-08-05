"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var xAlumnos = []; //Inicializo mi Arreglo de Alumnos de tipo Clase Alumno en vacio
var xProfesores = []; //Inicializo mi Arreglo de Profesores de tipo Clase Profesor en vacio
var escuela;
var Alumno = /** @class */ (function () {
    function Alumno(nombreAlumno, idAlumno, notaAlumno) {
        this.nombreAlumno = nombreAlumno;
        this.idAlumno = idAlumno;
        this.notaAlumno = notaAlumno;
    }
    Alumno.prototype.setNombreAlumno = function (nombreAlumno) {
        this.nombreAlumno = nombreAlumno;
    };
    Alumno.prototype.getNombreAlumno = function () {
        return this.nombreAlumno;
    };
    Alumno.prototype.setIdAlumno = function (idAlumno) {
        this.idAlumno = idAlumno;
    };
    Alumno.prototype.getIdAlumno = function () {
        return this.idAlumno;
    };
    Alumno.prototype.setNotaAlumno = function (notaAlumno) {
        this.notaAlumno = notaAlumno;
    };
    Alumno.prototype.getNotaAlumno = function () {
        if (this.notaAlumno >= 7) {
            console.log("El alumno: ", this.nombreAlumno, "esta aprobado con: ", this.notaAlumno);
        }
        else {
            console.log("El alumno: ", this.nombreAlumno, "esta desaprobado con: ", this.notaAlumno);
        }
    };
    return Alumno;
}());
var Profesor = /** @class */ (function () {
    function Profesor(nombreProfesor, idProfesor, estadoProfesor, xAlumnos) {
        this.nombreProfesor = nombreProfesor;
        this.idProfesor = idProfesor;
        this.estadoProfesor = estadoProfesor;
        this.xAlumnos = xAlumnos;
    }
    Profesor.prototype.setNombreProfesor = function (nombreProfesor) {
        this.nombreProfesor = nombreProfesor;
    };
    Profesor.prototype.getNombreProfesor = function () {
        return this.nombreProfesor;
    };
    Profesor.prototype.setIdProfesor = function (idProfesor) {
        this.idProfesor = idProfesor;
    };
    Profesor.prototype.getIdProfesor = function () {
        return this.idProfesor;
    };
    Profesor.prototype.setEstadoProfesor = function (estadoProfesor) {
        this.estadoProfesor = estadoProfesor;
    };
    Profesor.prototype.getEstadoProfesor = function () {
        return this.estadoProfesor;
    };
    Profesor.prototype.setAlumnos = function () {
        this.xAlumnos = xAlumnos;
    };
    Profesor.prototype.getAlumnos = function () {
        return this.xAlumnos;
    };
    return Profesor;
}());
var Escuela = /** @class */ (function () {
    function Escuela(nombreEscuela, xComision, xClaustroDocente) {
        this.nombreEscuela = nombreEscuela;
        this.xComision = xComision;
        this.xClaustroDocente = xClaustroDocente;
    }
    Escuela.prototype.setNombreEscuela = function (nombreEscuela) {
        this.nombreEscuela = nombreEscuela;
    };
    Escuela.prototype.getNombreEscuela = function () {
        return this.nombreEscuela;
    };
    Escuela.prototype.setXComision = function (xComision) {
        this.xComision = xComision;
    };
    Escuela.prototype.getXComision = function () {
        return this.xComision;
    };
    Escuela.prototype.setXClaustroDocente = function (xClaustroDocente) {
        this.xClaustroDocente = xClaustroDocente;
    };
    Escuela.prototype.getXClaustroDocente = function () {
        return this.xClaustroDocente;
    };
    return Escuela;
}());
//////////////////   Declaracion de Variables /////////////////
function cargarAlumnos() {
    var ingresaAlumno = true;
    var i = 0;
    while (ingresaAlumno) {
        console.log("");
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("  A continuacion agregara un Alumno a su Comision  ");
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("");
        var nombre = rls.question("Ingrese el Nombre del Alumno: ");
        var idAlumno = rls.question("Ingrese el ID del Alumno: ");
        var nota = rls.question("Ingrese la Nota del Alumno: ");
        xAlumnos[i] = new Alumno(nombre, idAlumno, nota);
        if (nota >= 7) {
            console.log("El Alumno esta Aprobado");
        }
        else {
            console.log("El Alumno esta Desaprobado");
        }
        i++;
        if (rls.question("Desea ingresar otro Alumno? (Si / No)") == "Si") {
            ingresaAlumno = true;
        }
        else {
            ingresaAlumno = false;
        }
    }
    console.log("Ha finalizado la carga de sus alumnos");
    console.log("-------------------------------------");
    console.log("");
    console.log("");
    console.log("");
    //console.log("El curso lo conforman los alumnos: ", xAlumnos);
}
function cargarProfesores() {
    var ingresaProfesor = true;
    var i = 0;
    while (ingresaProfesor) {
        console.log("");
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("  A continuacion agregara un Profesor a su Claustro Docente  ");
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("");
        var nombre = rls.question("Ingrese el Nombre de Profesor: ");
        var idProfesor = rls.question("Ingrese el ID de Profesor: ");
        var estado = rls.question("Ingrese el Estado de Actividad de Profesor(True o False)");
        xProfesores[i] = new Profesor(nombre, idProfesor, estado, xAlumnos);
        i++;
        if (rls.question("Desea ingresar otro Profesor? (Si / No)") == "Si") {
            ingresaProfesor = true;
        }
        else {
            ingresaProfesor = false;
        }
        // console.log("El curso lo conforman los profesores: ", xProfesores);
    }
    console.log("Ha finalizado la carga de sus profesores");
    console.log("----------------------------------------");
    console.log("");
    console.log("");
    console.log("");
}
function crearEscuela() {
    console.log("Ingrese el Nombre de la Escuela que desea crear: ");
    var nombreEscuela = rls.question();
    escuela = new Escuela(nombreEscuela, xAlumnos, xProfesores);
    console.log("");
    console.log("");
    console.log("");
    console.log("------------------------------------------------------------------------------------------------------");
    console.log("Con los Alumnos y los Profesores previamente cargados, su Escuela se conforma de la siguiente manera: ", escuela);
}
/////////////////// INICIO DEL PROGRAMA /////////////////
cargarAlumnos();
cargarProfesores();
crearEscuela();
