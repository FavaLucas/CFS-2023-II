import { mamifero } from "./mamifero";
import { reptil } from "./reptil";
import { murciegalo } from "./murciegalo";

let golbat = new murciegalo("Batman",74,"Violeta","Onda Sonica");
golbat.utilizarEcolocalizacion();

let pikachu = new mamifero("El raton perez", 105,"Amarillo");
pikachu.comer();


let ekans = new reptil ("Reptilo", 25,"Violeta");
ekans.tempCorporal();
