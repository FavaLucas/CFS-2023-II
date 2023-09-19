"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var CliRegular_1 = require("./CliRegular");
var CliGold_1 = require("./CliGold");
var CliPlatino_1 = require("./CliPlatino");
var Context_1 = require("./Context");
for (var i = 0; i < 3; i++) {
    var cliente = rls.question('ingrece tipo de cliente:');
    var precioProducto = rls.questionInt('ingrece precio del producto:');
    var descuento = new Context_1.Context();
    if (cliente == 'regular') {
        descuento.setEstrategia(new CliRegular_1.CliRegular);
        console.log(descuento.aplicarEstrategia(precioProducto));
    }
    else if (cliente == 'gold') {
        descuento.setEstrategia(new CliGold_1.CliGold);
        console.log(descuento.aplicarEstrategia(precioProducto));
    }
    else if (cliente == 'platino') {
        descuento.setEstrategia(new CliPlatino_1.CliPlatino);
        console.log(descuento.aplicarEstrategia(precioProducto));
    }
}
