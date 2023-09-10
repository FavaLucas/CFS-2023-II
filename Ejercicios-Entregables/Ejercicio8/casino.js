"use strict";
exports.__esModule = true;
var Poker_1 = require("./Poker");
var poker = new Poker_1.Poker("poker");
console.log("Bienvinido al Casino La suerte esta echada!");
poker.comprarFichas(1000);
for (var i = 0; i < 10; i++) {
    poker.iniciarJuego();
    poker.apostarEnJuego();
}
poker.canjearFichas();
poker.getCantFichas();
poker.getCantidadCartas();
