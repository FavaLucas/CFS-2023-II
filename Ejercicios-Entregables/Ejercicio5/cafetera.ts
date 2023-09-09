export class Cafetera {
    private capacidadMaxima: number;
    private cantidadActual: number;
  
    public constructor(capacidadMaxima?: number, cantidadActual?: number) {
      if (!capacidadMaxima && !cantidadActual) {
        this.capacidadMaxima = 1000;
        this.cantidadActual = 0;
        console.log("cafetera estandar")
      } else if (capacidadMaxima && !cantidadActual) {
        this.capacidadMaxima = capacidadMaxima;
        this.cantidadActual = capacidadMaxima;
        console.log("capacidad maxima")
      } else if (cantidadActual && capacidadMaxima) {
        if (cantidadActual > capacidadMaxima) {
          let sobrante: number = cantidadActual - capacidadMaxima;
          this.cantidadActual = capacidadMaxima;
          this.capacidadMaxima = capacidadMaxima;
          console.log(`se lleno la cafetera y el resto se ha puesto en un termo,${sobrante}`)
        }
      }
    }
  
    public llenarCafetera(): void {
      this.cantidadActual = this.capacidadMaxima;
      console.log("su cafetera ya esta lista")
    }
  
    public servirTaza(tamañoTaza: number): void {
      if (this.cantidadActual > tamañoTaza) {
        this.cantidadActual -= tamañoTaza;
        console.log("se ha llenado su taza con: ", tamañoTaza);
  
      } else if (this.cantidadActual == 0) {
        console.log("Por favor, llene su cafetera");
      } else if (this.cantidadActual < tamañoTaza && this.cantidadActual > 0) {
        console.log(`su taza se lleno con ${this.cantidadActual} cc, su cafetera ha quedado vacia`);
        this.cantidadActual = 0;
      }
    }
  
    public vaciarCafetera(): void {
      this.cantidadActual = 0;
      console.log("Se ha vaciado su cafetera")
  
    }
  
    public agregarCafe(cafeAgregado: number): void {
      let espacioDisponible: number = this.capacidadMaxima - this.cantidadActual;
      if (espacioDisponible) {
  
        if (espacioDisponible > cafeAgregado) {
          this.cantidadActual += cafeAgregado;
          espacioDisponible = this.capacidadMaxima - this.cantidadActual;
          console.log(`se agrego ${this.cantidadActual} cc mas de cafe,queda disponible ${espacioDisponible} cc para llenar`);
        } else {
          console.log("la cantidad que quiere agregar supera la cantidad disponible")
        }
  
  
  
      }
    }
  
    public mostrarCafetera(): void {
      console.log("capacidad max: ", this.capacidadMaxima)
      console.log("cantidad actual: ", this.cantidadActual)
      console.log("...........................")
    }
  
  
  
  }