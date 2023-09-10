export class Jugador {
    private nombreJugador: string;
    private dineroJugador: number;
    private fichasJugador: number;

    constructor(nombreJugador: string, dineroJugador: number, fichasJugador: number) {
        this.nombreJugador = nombreJugador
        this.dineroJugador = dineroJugador
        this.fichasJugador = fichasJugador
    }    
    public getNombreJugador(): string {
        return this.nombreJugador;
    }

    public setNombreJugador(nombreJugador: string): void {
        this.nombreJugador = nombreJugador;
    }

    public getDineroJugador(): number {
        return this.dineroJugador;
    }

    public setDineroJugador(dineroJugador: number): void {
        this.dineroJugador = dineroJugador;
    }

    public getFichasJugador(): number {
        return this.fichasJugador;
    }

    public setFichasJugador(fichasJugador: number): void {
        this.fichasJugador = fichasJugador;
    }
}