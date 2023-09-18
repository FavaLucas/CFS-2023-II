"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fabricaAutomotriz_1 = require("./fabricaAutomotriz");
var fabrica = new fabricaAutomotriz_1.fabricaAutomotris;
var auto1 = fabrica.crearVehiculo("auto", "Ford", 1998, 4, 250);
auto1.arrancar();
var camioneta1 = fabrica.crearVehiculo("camioneta", "Renault", 2005, 4, 400);
camioneta1.arrancar();
