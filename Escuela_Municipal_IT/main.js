"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Profesor_1 = require("./Profesor");
var Alumno_1 = require("./Alumno");
var Materia_1 = require("./Materia");
var alumno1 = new Alumno_1.Alumno("Kevin");
var alumno2 = new Alumno_1.Alumno("Lorena");
var matematica = new Materia_1.Materia("Matematicas", new Profesor_1.Profesor("Ariel"));
matematica.agregarInscriptos(alumno1);
matematica.agregarInscriptos(alumno2);
matematica.agregarExamen(alumno1, 8);
matematica.agregarExamen(alumno1, 6);
matematica.agregarExamen(alumno1, 10);
matematica.agregarExamen(alumno1, 7);
matematica.agregarExamen(alumno1, 10);
matematica.agregarExamen(alumno2, 9);
matematica.agregarExamen(alumno2, 9);
matematica.agregarExamen(alumno2, 8);
matematica.agregarExamen(alumno2, 10);
matematica.imprimirPromedios();
console.log(matematica);
