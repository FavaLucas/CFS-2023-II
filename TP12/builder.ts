class TransaccionCompleta {
  public movimientoInventario: Inventario;
  public datosCliente: Cliente;
  public producto: Producto;

  constructor() {
  }

}


interface Builder {
  build(trx: TransaccionCompleta, trxID: number): TransaccionCompleta;
}

class ProductoBuilder implements Builder {

  build(trx: TransaccionCompleta, trxID: number): TransaccionCompleta {
    let cli: Cliente = BaseDatos.getCliente(trxID);
    trx.datosCliente = cli;
  }
}

class ClienteBuilder implements Builder {

  build(trx: TransaccionCompleta, trxID: number): TransaccionCompleta {
    let prod: Producto = BaseDatos.getProducto(trxID);
    trx.producto = prod;
  }
}

//Director
class BuilderTransaccion {

  //Builders
  clienteBuilder: ClienteBuilder;
  productoBuiler: ProductoBuilder;
  trxID: number;
  constructor(trxID: number) {
    this.trxID = trxID;
  }

  contruirTransaccion(): TransaccionCompleta {
    let trxCmp: TransaccionCompleta = new TransaccionCompleta();
    trxCmp = this.clienteBuilder.build(trxCmp, this.trxID);
    trxCmp = this.productoBuiler.build(trxCmp, this.trxID);
    return trxCmp;
  }
}




let transaccion = new BuilderTransaccion(5).contruirTransaccion();

