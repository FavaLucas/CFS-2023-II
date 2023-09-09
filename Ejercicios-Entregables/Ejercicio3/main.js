"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serie_1 = require("./serie");
var Alf = new serie_1.Serie("Alf", 1990, 30, 4);
var Narnia = new serie_1.Serie("Narnia", 1965, 1, 1);
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
