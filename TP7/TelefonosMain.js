"use strict";
exports.__esModule = true;
var Telefono_1 = require("./Telefono");
var TelefonoConCamara_1 = require("./TelefonoConCamara");
var TelefonoConRadio_1 = require("./TelefonoConRadio");
var telefono1 = new Telefono_1.Telefono();
var telefono2 = new TelefonoConCamara_1.TelefonoConCamara();
var telefono3 = new TelefonoConRadio_1.TelefonoConRadio(103.1);
telefono1.hacerLlamada();
telefono2.sacarFoto();
telefono3.verFrecuenciaActual();
telefono2.prenderApagar();
