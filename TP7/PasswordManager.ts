class Password {
  private incluyeNumero: number;
  private incluyeMayuscula: boolean;
  private longitudMinima: boolean;

  constructor(longitudMinima: boolean, incluyeNumero: number, incluyeMayuscula: boolean) {
    this.incluyeNumero = incluyeNumero;
    this.longitudMinima = longitudMinima;
    this.incluyeMayuscula = incluyeMayuscula;
  }


}
