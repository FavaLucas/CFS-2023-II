


import * as fs from 'fs';
import * as path from 'path';

class BitcointTrx {
  protected walletIn: string;
  protected walletOut: string;
  protected monto: number;
  protected fecha: Date;

  constructor(walletIn: string, walletOut: string, monto: number) {
    this.walletIn = walletIn;
    this.walletOut = walletOut;
    this.fecha = new Date();
    this.monto = monto;
  }

  getWalletIn(): string {
    return this.walletIn;
  }

  getWalletOut(): string {
    return this.walletOut;
  }

  getMonto(): number {
    return this.monto;
  }

  getFecha(): Date {
    return this.fecha;
  }
}

interface Almacenador {
  guardarInformacion(informacion: BitcointTrx): void;
}

class AlmacenaTXT implements Almacenador {
  private path = path.resolve('./btnTrx.txt');

  guardarInformacion(informacion: BitcointTrx): void {
    const infoTxt = `${informacion.getFecha().toLocaleString('es-AR')} se movio desde ${informacion.getWalletOut()} hacia ${informacion.getWalletIn()} ${informacion.getMonto()} BTN`;
    fs.writeFileSync(this.path, `${infoTxt}\n`, { flag: 'a' })
  }
}

class AlmacenaJSON implements Almacenador {
  private path = path.resolve('./btnTrx.json');

  guardarInformacion(informacion: BitcointTrx): void {
    fs.writeFileSync(this.path, `${JSON.stringify(informacion)}\n`, { flag: 'a' })
  }
}

//Strategy
class ProcesadorTransacciones {
    private txt:  Almacenador;
    private json : Almacenador;

  constructor() {
    this.txt = new AlmacenaTXT();
    this.json = new AlmacenaJSON();
  }

  almacenarTrxBtn(trx: BitcointTrx, entidad: boolean): void {
    if (entidad) {
      this.txt.guardarInformacion(trx);
    }else{
      this.json.guardarInformacion(trx);
    }
  }
}


//cliente
const trxBit1 = new BitcointTrx('hgufa JSON 49jhud', 'hfja JSON ay7333', 14);
const trxBit2 = new BitcointTrx('hf TXT ajdy7333', 'hgufaaTXT ur3849jhud', 22);

const procesador = new ProcesadorTransacciones(/* persona o sistema*/);
procesador.almacenarTrxBtn(trxBit1, false);
procesador.almacenarTrxBtn(trxBit2, true);