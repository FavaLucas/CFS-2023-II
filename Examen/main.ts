import { ArticuloLectura } from "./ArticuloLectura";
import { Libro } from "./Libro";
import { Revista } from "./Revista";
import { Biblioteca } from "./Bilioteca";

let biblioteca1 = new Biblioteca("1ero de Mayo", "Alsina 2654");
let libro1 = new Libro(123, "Borges", "Salamandra", "El examen", 40 );
let revista1 = new Revista(332, "Jose Hernandez", "Nacion Argentina", "Martin Fierro", 30);

biblioteca1.insertar(libro1);
biblioteca1.insertar(revista1);

console.log(biblioteca1);

biblioteca1.buscar(332);

biblioteca1.buscarPorAutor("Borges");