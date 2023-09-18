import { Strategy } from "./Strategy";

export class Context {
    constructor( ) {
    }
    setEstrategia(transaccion: Strategy):number {
        return transaccion.convertirMoneda();
    }

}
