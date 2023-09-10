"use strict";
exports.__esModule = true;
var Poker_1 = require("./Poker");
var TragaMonedas_1 = require("./TragaMonedas");
var poker = new Poker_1.Poker();
var tragaMonedas = new TragaMonedas_1.TragaMonedas();
console.log("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░");
console.log("Bienvinido al Casino La suerte esta echada!");
poker.comprarFichas(1000);
console.log("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░");
for (var i = 0; i < 5; i++) {
    poker.iniciarJuego();
    poker.apostarEnJuego();
}
poker.canjearFichas();
poker.getCantFichas();
console.log("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░");
console.log("Bienvenido a la Traga Monedas: ║ - Anubis III - ║.");
tragaMonedas.comprarFichas(200);
for (var i = 0; i < 5; i++) {
    tragaMonedas.iniciarJuego();
    tragaMonedas.apostarEnJuego();
}
tragaMonedas.canjearFichas();
tragaMonedas.getCantFichas();
console.log("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░");
