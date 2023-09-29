//modificar el ISBN debe aumentar por acumulador

import { ArticuloLectura } from "./ArticuloLectura";
import { Libro } from "./Libro";
import { Revista } from "./Revista";
import { Bilioteca } from "./Biblioteca";

console.log("-----------")
let revista2 = new Revista(223, "Borges", "Sudestada", "Pensamientos");
revista2.setCantidadPaginas(52);
console.log("-----------")
let revista1 = new Revista(123, "Cepit", "Salamanca", "POO");
revista1.setCantidadPaginas(45);
console.log("-----------")
let libro1 = new Libro(321, "Borges", "Salamanca", "Ejemplos para evaluar POO");
libro1.setCantidadPaginas(62);
console.log("-----------")
let libro2 = new Libro (666, "Borges", "Salamanca", "Raul 123");
libro2.setCantidadPaginas(65);
console.log("-----------")
let biblioteca = new Bilioteca("Bliblioteca 1", "25 de Mayo 2505");


console.log(biblioteca.insertar(revista1));
console.log(biblioteca.insertar(libro1));
console.log(biblioteca.insertar(libro2));
console.log("-----------")
console.log(biblioteca);
console.log("-----------")

console.log("------Busqueda de Articulo 111 --------")
console.log(biblioteca.buscar(111));
console.log("--------Busqueda de Articulo 123---------")
console.log(biblioteca.buscar(123));
console.log("--------Busqueda de Autor Borges---------")
console.log(biblioteca.buscarPorAutor("Borges"));
console.log("--------Busqueda el id 666 para cambiar paginas---------")
console.log(biblioteca.modificarPaginas(666, 123));
console.log("--------Busqueda el id 666 y si lo encuentra lo elimina de la biblioteca---------")
console.log(biblioteca.eliminar(666));
console.log("-----------------")
console.log(biblioteca);