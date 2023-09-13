import { Mago } from "./Mago";
import { Guerrero } from "./Guerrero";
import { arch } from "os";

let Gandalf = new Mago(40,100,'Gandalf',30);
let Arturo = new Guerrero(60,150,'Arturo',40);

Gandalf.atacar(Arturo);

Arturo.atacar(Gandalf);

Gandalf.curarse(100);
Gandalf.lanzarEchizo();
Arturo.usarEscido();
Arturo.curarse(1000);
Arturo.atacar(Gandalf);
