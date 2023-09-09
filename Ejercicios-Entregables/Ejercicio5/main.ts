import { Cafetera } from "./cafetera";

let cafetera1 = new Cafetera();
cafetera1.mostrarCafetera();
let cafetera2 = new Cafetera(1200);
cafetera2.mostrarCafetera();
let cafetera3 = new Cafetera(1000,1500)
cafetera3.mostrarCafetera();

cafetera1.llenarCafetera();

cafetera1.servirTaza(300);
cafetera1.servirTaza(300);
console.log(cafetera1);
cafetera1.agregarCafe(800);
console.log(cafetera1);
cafetera1.vaciarCafetera();
cafetera1.servirTaza(300);
cafetera1.mostrarCafetera();
cafetera1.agregarCafe(200);
cafetera1.servirTaza(300);