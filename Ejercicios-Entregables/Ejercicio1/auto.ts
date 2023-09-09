export class Auto {
    private marca: string;
    private duenio: string;
    private patente: string;

    constructor(marca: string, duenio: string, patente: string) {
        this.marca = marca;
        this.duenio = duenio;
        this.patente = patente
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getDuenio(): string {
        return this.duenio;
    }

    public setDuenio(duenio: string): void {
        this.duenio = duenio;
    }

    public getPatente(): string {
        return this.patente;
    }

    public setPatente(patente: string): void {
        this.patente = patente;
    }
}