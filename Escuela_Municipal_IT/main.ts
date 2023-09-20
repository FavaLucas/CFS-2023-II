import { Profesor } from "./Profesor";
import { Alumno } from "./Alumno";
import { Examen } from "./Examen";
import { Inscripto } from "./Inscripto";
import { Materia } from "./Materia";

let alumno1 = new Alumno("Kevin");
let alumno2 = new Alumno("Lorena");
let matematica = new Materia("Matematicas", new Profesor("Ariel"));
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
matematica.imprimirPromediosxMateria();

console.log(matematica);