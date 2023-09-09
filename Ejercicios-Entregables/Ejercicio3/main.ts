import { Serie } from "./serie";

let Alf = new Serie("Alf", 1990, 30, 4);
let Narnia = new Serie("Narnia", 1965, 1, 1);

//<-------------------------------------------------Logica-------------------------------------->
console.log("<------------------Alf--------------->");
Alf.verEpisodio(1, 25);
Alf.episodiosPorVer();
Alf.serieVista();
Alf.toString(Alf);
console.log("<------------------Narnia--------------->");
Narnia.verEpisodio(1, 1);
Narnia.episodiosPorVer();
Narnia.serieVista();
Narnia.toString(Narnia);
