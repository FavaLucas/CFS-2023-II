export class vehiculo {
    private patente: string;
    private marca: string;
    private modelo: string;
    private anio: number;
    private tipo: string;

    constructor(tipo: string, patente: string, marca: string, modelo: string, anio: number) {
        this.tipo = tipo;
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    getPatente(): string {
        return this.patente;
    }

    getMarca(): string {
        return this.marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    getAnio(): number {
        return this.anio;
    }

    getTipo():string{
        return this.tipo;
    }

}