import { Alumno } from "./alumno";
import { Asignatura } from "./asignatura";
import { Examen } from "./examen";
import { Facultad } from "./facultad";
import { Inscripto } from "./Inscripto";


// <------------------------------------------------------------------------->
const ezulaica = new Alumno("Emiliano");
let inscripto1 = new Inscripto(ezulaica);


inscripto1.agregarExamenRendido(new Examen(8));
inscripto1.agregarExamenRendido(new Examen(7));
inscripto1.agregarExamenRendido(new Examen(7));
inscripto1.agregarExamenRendido(new Examen(10));

let matematica = new Asignatura("Matematica");
matematica.agregarInscripto(inscripto1);

let POO = new Asignatura("Programacion");




const colegio = new Facultad();
colegio.agregarAlumno(ezulaica);
colegio.agregarAsignatura(matematica);

console.log(`El promedio de Emiliano es ${ezulaica.calcularPromedio()}`);


console.log(`El colegio Nuestra Señora de la Constante tiene un promedio de: ${colegio.calcularPromedio()}`);