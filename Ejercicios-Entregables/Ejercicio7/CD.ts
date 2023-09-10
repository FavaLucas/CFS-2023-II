import { Cancion } from "./Cancion";

export class CD {
  private canciones: Cancion[];
  private contador: number;

  public constructor() {
    this.canciones = [];
    this.contador = 0;
  }

  public agregarCancion(cancion: Cancion): void {
    this.canciones.push(cancion);
  }

  public eliminarNroDeCancion(indice: number): void {
    console.log("Se eleminara la cancion nro:", indice);
    console.log("Listado Original");
    console.log(this.canciones);
    this.canciones.splice(indice - 1, 1);
    console.log("Listado despues de Eliminar");
    console.log(this.canciones);
  }

  public mostrarCancionNro(indice: number): void {
    console.log("En la ubicacion:", indice, "-", this.canciones[indice - 1]);
  }

  public contarCaciones(): number {
    this.contador = this.canciones.length;
    return this.contador;
  }

  public insertarCancion(indice: number, nuevaCancion: Cancion): void {
    console.log("Colocaremos su nueva cancion en la posicion indicada!");
		//lineas 37 y 38 hacen una copia explicita (sin hacer referencia al array original)
    let copiaCD: Cancion[] = [...this.canciones];
    let copiaCD2: Cancion[] =  [...this.canciones];
    let elementosEliminados: Cancion[] = [];
    let elementosConservados: Cancion[] = [];
    let posicionesABorrar: number = copiaCD.length - (indice - 1);

    elementosEliminados = copiaCD.splice(indice - 1, posicionesABorrar);
    // console.log(elementosEliminados);
    // console.log("----------------------");

    for (let i = 0; i < indice-1; i++) {
      elementosConservados[i] = copiaCD2[i];
    }
    // console.log(elementosConservados);
    // console.log("----------------------");

    elementosConservados.push(nuevaCancion);
    this.canciones = elementosConservados.concat(elementosEliminados);
    console.log(this.canciones);
  }

  public grabarCancion(indice: number, nuevaCancion: Cancion): void {
    //Reemplazar la cancion existente por la que envia el usuario
    console.log(
      "Reemplazaremos la cancion existente por la nueva, en la posicion:",
      indice
    );
    this.canciones[indice - 1] = nuevaCancion;
    console.log(this.canciones);
  }
}
