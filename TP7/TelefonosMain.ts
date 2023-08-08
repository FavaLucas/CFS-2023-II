import * as rls from "readline-sync";
import { Telefono } from "./Telefono";
import { TelefonoConCamara } from "./TelefonoConCamara";
import { TelefonoConRadio } from "./TelefonoConRadio";

let telefono1 = new Telefono();
let telefono2 = new TelefonoConCamara();
let telefono3 = new TelefonoConRadio(103.1);

telefono1.hacerLlamada();
telefono2.sacarFoto();
telefono3.verFrecuenciaActual();
telefono2.prenderApagar();
