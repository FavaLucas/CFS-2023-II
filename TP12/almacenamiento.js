"use strict";
exports.__esModule = true;
// Quiero implementar un almacenamiento de textos, que sirvan para ser enviados a un sistema y/o leidos por una persona
// Para otro sistema puedo guardalo en JSON
// Para una persona guardalo en TXT
var fs = require("fs");
var path = require("path");
var BitcointTrx = /** @class */ (function () {
    function BitcointTrx(walletIn, walletOut, monto) {
        this.walletIn = walletIn;
        this.walletOut = walletOut;
        this.fecha = new Date();
        this.monto = monto;
    }
    BitcointTrx.prototype.getWalletIn = function () {
        return this.walletIn;
    };
    BitcointTrx.prototype.getWalletOut = function () {
        return this.walletOut;
    };
    BitcointTrx.prototype.getMonto = function () {
        return this.monto;
    };
    BitcointTrx.prototype.getFecha = function () {
        return this.fecha;
    };
    return BitcointTrx;
}());
var AlmacenaTXT = /** @class */ (function () {
    function AlmacenaTXT() {
        this.path = path.resolve('./btnTrx.txt');
    }
    AlmacenaTXT.prototype.guardarInformacion = function (informacion) {
        var infoTxt = "".concat(informacion.getFecha().toLocaleString('es-AR'), " se movio desde ").concat(informacion.getWalletOut(), " hacia ").concat(informacion.getWalletIn(), " ").concat(informacion.getMonto(), " BTN");
        fs.writeFileSync(this.path, "".concat(infoTxt, "\n"), { flag: 'a' });
    };
    return AlmacenaTXT;
}());
var AlmacenaJSON = /** @class */ (function () {
    function AlmacenaJSON() {
        this.path = path.resolve('./btnTrx.json');
    }
    AlmacenaJSON.prototype.guardarInformacion = function (informacion) {
        fs.writeFileSync(this.path, "".concat(JSON.stringify(informacion), "\n"), { flag: 'a' });
    };
    return AlmacenaJSON;
}());
//Strategy
var ProcesadorTransacciones = /** @class */ (function () {
    function ProcesadorTransacciones(isPersona) {
        if (isPersona) {
            this.almacenador = new AlmacenaTXT();
        }
        else {
            this.almacenador = new AlmacenaJSON();
        }
    }
    ProcesadorTransacciones.prototype.almacenarTrxBtn = function (trx) {
        this.almacenador.guardarInformacion(trx);
    };
    return ProcesadorTransacciones;
}());
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
var trxBit1 = new BitcointTrx('hgufcidsyiur3849jhud', 'hfjkdskhfjdy7333', 0.0021);
var trxBit2 = new BitcointTrx('hfjkdskhfjdy7333', 'hgufcidsyiur3849jhud', 0.0021);
var procesador = new ProcesadorTransacciones(false);
procesador.almacenarTrxBtn(trxBit1);
procesador.almacenarTrxBtn(trxBit2);
