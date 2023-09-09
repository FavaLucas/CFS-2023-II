import { Matriz } from "./Matriz";
import * as rls from "readline-sync";

let y: number = rls.question("Ingrese la cantidad de columnas de su Matriz: ");
let x: number = rls.question("Ingrese la cantidad de filas de su Matriz: ");

let matriz = new Matriz(x, y);
matriz.imprimirMatriz();

let buscaY: number = rls.question("Ingrese la posicion Y que quiera buscar de su Matriz: ");
let buscaX: number = rls.question("Ingrese la posicion X que quiera buscar de su Matriz: ");

matriz.getValor(buscaX, buscaY);
