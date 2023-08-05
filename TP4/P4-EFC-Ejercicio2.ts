//Practico 4 - POO - Ejercicio Fuera de Clase 2 - Matriz
import * as rls from "readline-sync";

class Matriz {
  private matriz: number[][];

  constructor(otraMatriz) {
    this.matriz = otraMatriz;
  }
  mostrarValor(f, c): void {
    console.log("Entró a mostrarValor()");
    console.log(this.matriz[f][c]);
  }
}

function creaMatriz(): number[][] {
  let filas = rls.question("Ingrese filas: ");
  let columnas = rls.question("Ingrese columnas: ");
  let matriz = new Array(filas);

  for (let k = 0; k < filas; k++) {
    matriz[k] = new Array(columnas);
  }

  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      matriz[i][j] = Math.floor(Math.random() * 10);
    }
  }
  console.log(matriz);
  return matriz;
}

let matrizCargada = creaMatriz();

let matriz1 = new Matriz(matrizCargada);

console.log("Ingrese fila y columna del valor que desea ver:");
let x = rls.question();
let y = rls.question();

matriz1.mostrarValor(x, y);
