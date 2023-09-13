import { CuentaAhorro } from "./cuantaAhorro";
import { CuentaCorriente } from "./CuentaCorriente";

let cuenta1 = new CuentaAhorro(0,0,"Lucas Fava",0);
let cuenta2 = new CuentaCorriente(0, 0,"Kevin Frias", 0);

cuenta1.depositar(10000);
console.log("--------------------------------");
cuenta1.calcularInteres(1000000);
console.log("--------------------------------");
cuenta1.retirar(5000);
console.log("--------------------------------");

cuenta2.depositar(50000);
console.log("--------------------------------");
cuenta2.aplicarInteres();
console.log("--------------------------------");
cuenta2.retirar(15000);