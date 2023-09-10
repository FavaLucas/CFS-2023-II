"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Poker = void 0;
var JuegoDeCasino_1 = require("./JuegoDeCasino");
var Poker = /** @class */ (function (_super) {
    __extends(Poker, _super);
    function Poker() {
        var _this = _super.call(this, "Poker", 50) || this;
        _this.cantFichasUsr = 0;
        return _this;
    }
    Poker.prototype.getCantFichas = function () {
        return this.cantFichasUsr;
    };
    Poker.prototype.setCantFichas = function (fichasUsr) {
        this.cantFichasUsr = fichasUsr;
    };
    Poker.prototype.comprarFichas = function (dineroUsr) {
        this.cantFichasUsr = dineroUsr / 10;
        console.log("Fichas compradas: ".concat(this.cantFichasUsr, "."));
    };
    Poker.prototype.iniciarJuego = function () {
        console.log("-----------------------------------------------------------------");
        console.log("Iniciando su mano de Poker!.");
        if (this.cantFichasUsr > this.getApuestaMinima()) {
            console.log("Esperando a que mas jugadores de unan...");
            console.log("Cuenta con ".concat(this.cantFichasUsr, " fichas para jugar."));
        }
        else {
            console.log("No cuenta con la cantidad minima de fichas para poder jugar.");
            console.log("Por favor compre mas fichas.");
        }
        console.log("-----------------------------------------------------------------");
    };
    Poker.prototype.apostarEnJuego = function () {
        var apuesta = Math.floor(Math.random() * 10) * 10;
        if (apuesta > 60) {
            this.cantFichasUsr = this.cantFichasUsr - apuesta;
            console.log("Lo lamento perdio la ronda, tiene ".concat(apuesta, " fichas menos"));
        }
        else {
            this.cantFichasUsr = this.cantFichasUsr + apuesta;
            console.log("Ha ganado la ronda, tiene ".concat(apuesta, " fichas mas. Felicitaciones!"));
        }
    };
    Poker.prototype.canjearFichas = function () {
        var dinerXCanje = this.cantFichasUsr * 10;
        this.cantFichasUsr = 0;
        if (dinerXCanje > 0) {
            console.log("****************************************************************");
            console.log("    ****Usted ha canjeado sus fichas, recupero: $".concat(dinerXCanje, ".*****"));
            console.log("****************************************************************");
        }
        else {
            console.log("****************************************************************");
            console.log("Su saldo es negativo $".concat(dinerXCanje, ", debera pagar su deuda o limpiar los pisos!"));
            console.log("****************************************************************");
        }
    };
    return Poker;
}(JuegoDeCasino_1.JuegoDeCasino));
exports.Poker = Poker;
