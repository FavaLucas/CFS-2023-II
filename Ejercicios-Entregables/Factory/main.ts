import { fabricaAutomotris } from "./fabricaAutomotriz"


let fabrica = new fabricaAutomotris;
let auto1 = fabrica.crearVehiculo("auto","Ford",1998,4,250);
auto1.arrancar();
let camioneta1 = fabrica.crearVehiculo("camioneta","Renault",2005,4,400);
camioneta1.arrancar();








