import { ArticuloLectura } from "./ArticuloLectura";
import { Libro } from "./Libro";
import { Revista } from "./Revista";

export class Biblioteca {
  private nombre: string;
  private domicilio: string;
  private elementos: ArticuloLectura[];

  public constructor(nombre: string, domicilio: string) {
    this.nombre = nombre;
    this.domicilio = domicilio;
    this.elementos = [];
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getDomicilio(): string {
    return this.domicilio;
  }

  public setDomicilio(domicilio: string): void {
    this.domicilio = domicilio;
  }

  public getElementos(): ArticuloLectura[] {
    return this.elementos;
  }

  public setElementos(elementos: ArticuloLectura[]): void {
    this.elementos = elementos;
  }

  //Metodo insertar recibe por parametro un nuevoElemento de tipo ArticuloLectura, evalua si el articulo se encuenta en el arreglo y si es asi no lo agrega. Si no se encuentra lo agrega al arreglo en la ultima posicion.
  public insertar(nuevoElemento: ArticuloLectura): void {
    let encontrado = false;
    for (let i = 0; i < this.elementos.length; i++) {
      if (this.elementos[i].getIsbn() == nuevoElemento.getIsbn()) {
        console.log("El texto ya se encuentra en su listado. No sera agregado");
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      console.log("Se ha agregado su nuevo texto con exito");
      this.elementos.push(nuevoElemento);
    }
  }

  //Metodo para buscar un articulo por ID pasado por parametro, una vez encontrado lo retorna.
  public buscar(idTexto: number): void {
    for (let i = 0; i < this.elementos.length; i++) {
      if (this.elementos[i].getIsbn() == idTexto) {
        console.log("Articulo encontrado", this.elementos[i]);
        break;
      }
    }
  }

  //Metodo que recibe por parametro un ID de texto y una cantidad de paginas.
  //Si encuentra el id en el arreglo, modifica la cantidad de paginas y retorna True, sino retorna
  public modificarPaginas(idTexto: number, cantPaginas: number): boolean {
    for (let i = 0; i < this.elementos.length; i++) {
      if (this.elementos[i].getIsbn() == idTexto) {
        return this.elementos[i].setCantidadPaginas(cantPaginas);
      }
    }
    return true;
  }

  //Metodo que recibe por parametro un ID de texto, lo busca en el arreglo y lo elimina.
  public eliminar(idTexto: number) {
    for (let i = 0; i < this.elementos.length; i++) {
      if (this.elementos[i].getIsbn() == idTexto) {
        this.elementos.splice(i, 1);
        break;
      }
    }
    console.log("Texto Eliminado");
  }

  //Metodo que recibe por parameto un Autor y lo busca en el arreglo de articulos, todos los artiruclos de un mismo autor se almacenan en un nuevo arreglo y son retornados.
  public buscarPorAutor(autor: string): ArticuloLectura[] {
    let listado: ArticuloLectura[] = [];
    let articulo: ArticuloLectura;
    for (let i = 0; i < this.elementos.length; i++) {
      if (this.elementos[i].getAutor() == autor) {
        articulo = this.elementos[i];
        listado.push(articulo);
      }
    }
    return listado;
  }
}
