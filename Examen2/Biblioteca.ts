import { Revista } from "./Revista";
import { Libro } from "./Libro";
import { ArticuloLectura } from "./ArticuloLectura";

export class Bilioteca {
  private nombre: string;
  private domicilio: string;
  private elementos: ArticuloLectura[];

  constructor(nombre: string, domicilio: string) {
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

  /**
   * Metodo para agregar un articulo nuevo al arreglo de elementos.
   * En caso que el articulo ya exista no se agrega y retorna false.
   * En caso que el articulo no exista se agrea y retorna true.
   * @param newArticulo 
   * @returns 
   */

  public insertar(newArticulo: ArticuloLectura): boolean {
    let tryInsertar = false;
    this.elementos.forEach((articuloActual) => {
      if (articuloActual.getIsbn() == newArticulo.getIsbn()) {
        console.log("El elemento ya se encuenta en su biblioteca, no sera agregado");
      } 
    });
    if (!tryInsertar){
        console.log("Se ha agregado su Articulo a la biblioteca");
        this.elementos.push(newArticulo);
        tryInsertar = true;
    }
    return tryInsertar;
  }

  /**
   * Metodo para buscar un articulo por su identificador.
   * Si el articulo se encuenta se retorna el mismo
   * si no se encuentra se muesta mensaje por console.log
   * @param idTexto 
   * @returns 
   */
  public buscar(idTexto: number): ArticuloLectura | undefined {
    let articuloEncontrado: ArticuloLectura | undefined;
    let encontrado = false;
    this.elementos.forEach((articuloActual) => {
      if (articuloActual.getIsbn() == idTexto) {
        articuloEncontrado = articuloActual;
        encontrado = true;
      }
    });
    if (!encontrado) {
      console.log("El articulo no se encuentra en su biblioteca");
    }
    return articuloEncontrado;
  }

 
  /**
   * Metodo para buscar un articulo por ID y modificar su cantidad de paginas.
   * Si el articulo se encuentra, retorna true en otro caso retorna false.
   * @param idTexto 
   * @param cantPaginas 
   * @returns 
   */
  public modificarPaginas(idTexto: number, cantPaginas: number): boolean {
    let encontrado = false;
    this.elementos.forEach((articuloActual) => {
      if (articuloActual.getIsbn() == idTexto) {
        console.log(articuloActual);
        articuloActual.setCantidadPaginas(cantPaginas);
        console.log("Se modifico la cantidad de paginas");
        console.log(articuloActual);
        encontrado = true;
      }
    });
    if (!encontrado){
        console.log("El articulo no se encuentra en su biblioteca");
    }
    return encontrado;
    }

    /**
     * Metodo que realiza la busqueda segun el parametro ingresado Autor, si lo encuentra retorna un arreglo con todos los articulos escritos por dicho autor. 
     * @param buscarAutor 
     * @returns 
     */
    public buscarPorAutor(buscarAutor: string): ArticuloLectura[] | undefined {
        let articulosEncontrados: ArticuloLectura [] = [];
        let encontrados = false
        this.elementos.forEach(articuloActual => {
            if(articuloActual.getAutor() == buscarAutor){
                articulosEncontrados.push(articuloActual);
                encontrados = true;
            }
        });
        if (!encontrados){
            console.log("No se encontraron articulos del autor indicado");
        }
        return articulosEncontrados;
    } 

    /**
     * Metodo que recibe un id de texto para buscar en el arreglo, si lo encuentra lo elimina y retorna true.
     * @param idTexto 
     * @returns 
     */
    public eliminar (idTexto: number): boolean {
      let encontrado = false;
      for (let i = 0; i < this.elementos.length; i++) {
        if(this.elementos[i].getIsbn() == idTexto){
          encontrado = true;
          console.log("El articulo fue eliminado");
          this.elementos.splice(i, 1);
          break;
        }
      }
      if (!encontrado){
        console.log("El articulo buscado no se encuentra en la biblioteca");
      }
      return encontrado;
    }
}