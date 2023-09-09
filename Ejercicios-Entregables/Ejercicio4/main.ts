import { Persona } from "./persona";
import { Cuenta } from "./cuenta";

let pepe = new Persona("pepe", 123456);
let pepeAcount = new Cuenta(pepe);

let juan = new Persona("juan", 654321);
let juanAcount = new Cuenta(juan, 15026);

pepeAcount.mostrarCuenta();
pepeAcount.ingresarMonto(10);
pepeAcount.mostrarCuenta();
pepeAcount.retirarMonto(50);
pepeAcount.mostrarCuenta();
console.log();

juanAcount.mostrarCuenta();
juanAcount.ingresarMonto(10);
juanAcount.mostrarCuenta();
juanAcount.retirarMonto(50);
juanAcount.mostrarCuenta();
