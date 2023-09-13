export class Personaje {
    protected danio: number;
    protected vida: number;
    protected nombre: string;

    
    constructor(danio: number, vida: number, nombre: string) {
        this.danio = danio;
        this.vida = vida;
        this.nombre = nombre;
    }

    public atacar(player:Personaje): void {
        player.setVida(player.getVida()-this.danio)
        console.log(`${this.nombre} ataco con ${this.danio} puntos de daño`);
        console.log(`la vida de ${player.getNombre()} se redujo a ${player.getVida()}`)
    }

    public curarse(cura: number): void {
        this.vida += cura;
        console.log(`${this.nombre} se curo ${cura} puntos de vida`);
    }


    public getDaño(): number {
        return this.danio;
    }

    public setDanio(danio: number): void {
        this.danio = danio;
    }

    public getVida(): number {
        return this.vida;
    }

    public setVida(vida: number): void {
        this.vida = vida;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
}