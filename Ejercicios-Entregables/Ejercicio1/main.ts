import { Auto } from "./auto";
import { RegistroAutomotor } from "./registroAutomotor";
let registro = new RegistroAutomotor;
let auto1 = new Auto("Ford","Lucas","Aa654SC");
let auto2 = new Auto("Ferrari","Franco","Aa654SB");
let auto3 = new Auto("Ford","Kevin","AC789SC");
let auto4 = new Auto("Lamborghini","Ayelen","Aj654SC");
let auto5 = new Auto("Buggati","Mario","Aa654SC");

registro.agregarAuto(auto1);
registro.agregarAuto(auto2);
registro.agregarAuto(auto3);
registro.agregarAuto(auto4);
registro.agregarAuto(auto5);

console.log ("------------------------");
registro.imprimirRegistro();
console.log ("--------------------------");
registro.eliminarAuto("Aa654SC");
console.log ("--------------------------");
registro.transferirAuto("Franco");
console.log ("--------------------------");
registro.consultasPatente("Aa654SB");
console.log ("--------------------------");
registro.consultasPatente("Aa654iB");
console.log ("--------------------------");
registro.imprimirRegistro();
