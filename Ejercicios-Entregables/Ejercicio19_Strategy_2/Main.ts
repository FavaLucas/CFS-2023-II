import * as rls from 'readline-sync';
import { CliRegular } from "./CliRegular";
import { CliGold } from "./CliGold";
import { CliPlatino } from "./CliPlatino";
import { Context } from "./Context";

for (let i = 0; i < 3; i++) {
  let cliente: string = rls.question('ingrece tipo de cliente:');
  let precioProducto: number = rls.questionInt('ingrece precio del producto:');
  let descuento = new Context();

  if (cliente == 'regular') {
    descuento.setEstrategia(new CliRegular);
    console.log(descuento.aplicarEstrategia(precioProducto));
  } else if (cliente == 'gold') {
    descuento.setEstrategia(new CliGold);
    console.log(descuento.aplicarEstrategia(precioProducto));
  } else if (cliente == 'platino') {
    descuento.setEstrategia(new CliPlatino);
    console.log(descuento.aplicarEstrategia(precioProducto));
  }
}
