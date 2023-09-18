export interface Strategy {
    convertirMoneda(): number;
    getTipoTransaccion(): string
    setValorTransaccion(valor:number);
    getValorTransaccion(): number
    
    


}     
