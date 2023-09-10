import { Cancion } from "./Cancion";
import { CD } from "./CD";

let nuevoCD = new CD();

let cancion1 = new Cancion("A", "A");
let cancion2 = new Cancion("B", "B");
let cancion3 = new Cancion("C", "C");
let cancion4 = new Cancion("D", "D");
let cancion5 = new Cancion("E", "E");
let cancion6 = new Cancion("F", "F");
let cancion7 = new Cancion("G", "G");
let cancion8 = new Cancion("H", "H");
let cancion9 = new Cancion("I", "I");

nuevoCD.agregarCancion(cancion1);
nuevoCD.agregarCancion(cancion2);
nuevoCD.agregarCancion(cancion3);
nuevoCD.agregarCancion(cancion4);
nuevoCD.agregarCancion(cancion5);
nuevoCD.agregarCancion(cancion6);
nuevoCD.agregarCancion(cancion7);
nuevoCD.agregarCancion(cancion8);
nuevoCD.agregarCancion(cancion9);
console.log("-------------------------------");
console.log("Total de caciones del CD: ", nuevoCD.contarCaciones());
console.log("-------------------------------");
nuevoCD.eliminarNroDeCancion(2);
console.log("-------------------------------");
console.log("Total de caciones del CD: ", nuevoCD.contarCaciones());
console.log("-------------------------------");
nuevoCD.mostrarCancionNro(4);
console.log("-------------------------------");
nuevoCD.mostrarCancionNro(6);
console.log("-------------------------------");

let cancionAgregar = new Cancion("Agregada","Agregada");
nuevoCD.grabarCancion(3, cancionAgregar);

console.log("CONSULTAR POR QUE SALE EL UNDEFINED");
let intento = new Cancion("Intento","Intento");
nuevoCD.insertarCancion(3, intento);

