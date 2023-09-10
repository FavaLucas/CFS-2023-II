import { Cancion } from "./Cancion";

console.log("-----------------------------");

let cancion1 = new Cancion();
cancion1.ponerTitulo("En el pais de la libertad");
cancion1.ponerAutor("Leon Gieco");
console.log(cancion1.mostrarTitulo());
console.log(cancion1.mostrarAutor());
console.log("-----------------------------");

let cancion2 = new Cancion("Solo le pido a dios", "Leon Gieco");
console.log(cancion2.mostrarTitulo());
console.log(cancion2.mostrarAutor());
console.log("-----------------------------");

let cancion3 = new Cancion("Zona de promesas", "Mercedes Sosa");
console.log(cancion3.mostrarTitulo());
console.log(cancion3.mostrarAutor());
console.log("-----------------------------");
