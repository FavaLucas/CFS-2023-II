export class Televisor {
    private volumenActual: number = 10;
    private estaPrendido: boolean = false;
    private canalActual: number = 0 ;
    
    public constructor(canalActual: number, volumenActual: number, estaPrendido: boolean) {
      this.canalActual = canalActual;
      this.volumenActual = volumenActual;
      this.estaPrendido = estaPrendido;
    }

    public setCanal(canal: number) {
      this.canalActual = canal;
    }

    public imprimirCanal(): void{
      console.log(this.canalActual);
    }


}