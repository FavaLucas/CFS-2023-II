import { Gerente } from "./gerente";
import { Trabajador } from "./trabajador";
import { EmpleadoTemporal } from "./empleadoTemporal";

let Lucas = new Gerente("Lucas","Fava",350000,"Salud");
let Kevin = new Trabajador("Kevin","Frias",250000,150);
let Ayelen = new EmpleadoTemporal("Ayelen","Porqueres",200000,100,"septiembre 21,2023");

Lucas.asignarTarea(Ayelen,"Ponete a programar");
Kevin.solicitarDiaLibre("18 septiempre 2023");
Lucas.reducirSalario(Kevin,5);
Lucas.aumentarSalario(Ayelen,5);
Ayelen.verificarVencimientoContrato("septiembre 20,2023");