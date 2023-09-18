"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cuantaAhorro_1 = require("./cuantaAhorro");
var CuentaCorriente_1 = require("./CuentaCorriente");
var cuenta1 = new cuantaAhorro_1.CuentaAhorro(0, 0, "Lucas Fava", 0);
var cuenta2 = new CuentaCorriente_1.CuentaCorriente(0, 0, "Kevin Frias", 0);
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
