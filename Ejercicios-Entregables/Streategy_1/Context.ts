
import { Strategy } from "./Strategy";
import { TransaccionDolar } from "./TransDolar";
import { TransaccionEuro } from "./TransEuro";
import { TransaccionPeso } from "./TransPeso";


export class Context {
    constructor( ) {
    }
    setEstrategia(transaccion: Strategy):number {
        return transaccion.convertirMoneda();
    }

}
