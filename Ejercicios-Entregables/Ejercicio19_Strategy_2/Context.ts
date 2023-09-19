import { Cliente } from "./Cliente";
export class Context {
    private cliente:Cliente;
    constructor( ) {
    }
    setEstrategia(cliente: Cliente):void{
        this.cliente = cliente;
    }
    aplicarEstrategia(precio:number):number{
        return this.cliente.comprarProducto(precio)
    }
}
