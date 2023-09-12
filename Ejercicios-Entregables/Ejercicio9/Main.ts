import { Perro } from "./Perro";
import { Gato } from "./Gato";
import { Pajaro } from "./Pajaro";


let oddie = new Perro('oddie',2,'si','chico');
let garfield = new Gato('garfield',5,'naranja','amarillo');
let loco = new Pajaro('loco',1,'carpintero','duro');

oddie.buscarObjeto('narcoticos');
oddie.hacer_sonido();
oddie.moverse();

garfield.moverse();
garfield.hacer_sonido();
garfield.Jugar('oddie');

loco.moverse();
loco.hacer_sonido();
loco.volar();
console.log(loco.getTipo_de_pico())

console.log('///////////////////')
console.log(oddie);
console.log('///////////////////')
console.log(garfield);
console.log('///////////////////')
console.log(loco);