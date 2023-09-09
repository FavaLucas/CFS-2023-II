// Quiero implementar un almacenamiento de textos, que sirvan para ser enviados a un sistema y/o leidos por una persona
// Para otro sistema puedo guardalo en JSON
// Para una persona guardalo en TXT
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
  private almacenador: Almacenador;

  constructor(isPersona: boolean) {
    if (isPersona) {
      this.almacenador = new AlmacenaTXT();
    } else {
      this.almacenador = new AlmacenaJSON();
    }
  }

  almacenarTrxBtn(trx: BitcointTrx): void {
    this.almacenador.guardarInformacion(trx);
  }
}

/*
//Strategy
class ProcesadorTransacciones {
  private almacenadorTXT: Almacenador;
  private almacenadorJSON: ALmacenador;

  constructor() {
      this.almacenador1 = new AlmacenaTXT();
      this.almacenador2 = new AlmacenaJSON();
  }

  almacenarTrxBtn(trx: BitcointTrx, isPersona: boolean): void {
    if (isPersona) {
      this.almacenadorTXT.guardarInformacion(trx);
    } else {
      this.almacenadorJSON.guardarInformacion(trx);
    }
  }
}
*/

//cliente
const trxBit1 = new BitcointTrx('hgufcidsyiur3849jhud', 'hfjkdskhfjdy7333', 0.0021);
const trxBit2 = new BitcointTrx('hfjkdskhfjdy7333', 'hgufcidsyiur3849jhud', 0.0021);

const procesador = new ProcesadorTransacciones(false);
procesador.almacenarTrxBtn(trxBit1);
procesador.almacenarTrxBtn(trxBit2);

