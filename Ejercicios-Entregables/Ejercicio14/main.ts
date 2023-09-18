import { mamifero } from "./mamifero";
import { reptil } from "./reptil";
import { murciegalo } from "./murciegalo";

let golbat = new murciegalo("Golbat",74,"Violeta","Onda Sonica");
golbat.utilizarEcolocalizacion();

let pikachu = new mamifero("Pikachu", 105,"Amarillo");
pikachu.comer();
console.log("Pikachu, ATACK TRUENOOO!!!!")


let ekans = new reptil ("Ekans", 25,"Violeta");
ekans.tempCorporal();
console.log("Ekans, utiliza Picotazo Venenoso.")