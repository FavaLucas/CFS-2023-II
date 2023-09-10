import { Poker} from "./Poker";
import { TragaMonedas } from "./TragaMonedas";

let poker = new Poker();
let tragaMonedas = new TragaMonedas();
console.log("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░");

console.log("Bienvinido al Casino La suerte esta echada!");
poker.comprarFichas(1000);

console.log("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░");
for (let i = 0; i < 5; i++) {
    poker.iniciarJuego();
    poker.apostarEnJuego();
}
poker.canjearFichas();
poker.getCantFichas()

console.log("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░");
console.log("Bienvenido a la Traga Monedas: ║ - Anubis III - ║.");
tragaMonedas.comprarFichas(200);
for (let i = 0; i < 5; i++) {
    tragaMonedas.iniciarJuego();
    tragaMonedas.apostarEnJuego();
}
tragaMonedas.canjearFichas();
tragaMonedas.getCantFichas();

console.log("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░");
