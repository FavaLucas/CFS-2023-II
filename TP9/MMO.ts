class Personaje {

    protected nombre: string;
    protected vida: number;
    protected poder: number;
    protected defensa: number;

    constructor(nombre: string, vida: number, poder: number, defensa: number) {
        this.nombre = nombre;
        this.vida = vida;
        this.poder = poder;
        this.defensa = defensa;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getVida(): number {
        return this.vida;
    }

    public setVida(vida: number): void {
        this.vida = vida;
    }

    public getPoder(): number {
        return this.poder;
    }

    public setPoder(poder: number): void {
        this.poder = poder;
    }

    public getDefensa(): number {
        return this.defensa;
    }

    public setDefensa(defensa: number): void {
        this.defensa = defensa;
    }



    public Atacar(): number {
        console.log(`${this.nombre} ataco ${this.poder} puntos de poder`)
        return this.poder;
    }

    public Defender(puntosAtaque: number): void {
        if (puntosAtaque >= this.defensa) {
            this.vida -= (puntosAtaque - this.defensa);
            console.log(`${this.nombre} Recibio ${(puntosAtaque - this.defensa)} puntos de daño, su vida actual es: ${this.vida}`);
        } else {
            console.log(`${this.nombre} no recibio daño`);
        }
        if (this.vida <= 0) {
            console.log('--------------------------')
            console.log(`${this.nombre} MURIO`);
            console.log('--------------------------')
        }
    }
}

class Espadachin extends Personaje {

    private clase: string;

    public constructor(nombre: string, clase: string, vida: number, poder: number, defensa: number) {
        super(nombre, vida, poder, defensa)
        this.clase = clase;
    }

    public Atacar(): number {
        console.log('')
        console.log(`${this.nombre} utilizo estocada, hizo ${this.poder} puntos de poder`)
        return this.poder;
    }
}


class Potenciador {
    protected nombre: string;
    protected Def: number;
    protected Atk: number;
    protected Hp: number;

    constructor(nombre: string, Def: number, Atk: number, Hp: number) {
        this.nombre = nombre;
        this.Def = Def;
        this.Atk = Atk;
        this.Hp = Hp;
    }

    public aplicarPotenciador(player: Personaje) {
        let defensa: number = player.getDefensa()+(player.getDefensa() * (this.Def / 100));
        let Ataque: number = player.getPoder()+(player.getPoder() * (this.Atk / 100));
        let vida: number = player.getVida()+(player.getVida() * (this.Hp / 100));
        console.log('');
        console.log(`se le aplico el potenciador ${this.nombre} a ${player.getNombre()}, sus stats incrementaron a: `);
        console.log(`Def: ${player.getDefensa()} --> ${defensa}`)
        console.log(`Atk: ${player.getPoder()} --> ${Ataque}`)
        console.log(`Hp: ${player.getVida()} --> ${vida}`)
        console.log('');
        player.setDefensa(defensa);
        player.setPoder(Ataque);
        player.setVida(vida);

    }

}


let juan = new Espadachin('juan', 'espadachin', 200, 50, 30);
let carlos = new Espadachin('carlos', 'espadachin', 200, 70, 30);
let EscudoDeOrion= new Potenciador('Escudo de Orion',30,0,0);
let MazoDeLaJusticia= new Potenciador('Mazo de la Justicia',0,20,0);
let ElixirDelOlimpo= new Potenciador('Elixir del olimpo',0,0,50);
let FiloDelInfinito=new Potenciador('Filo del infinito',0,100,0)

carlos.Defender(juan.Atacar());
console.log(carlos)
EscudoDeOrion.aplicarPotenciador(carlos);
MazoDeLaJusticia.aplicarPotenciador(carlos)
ElixirDelOlimpo.aplicarPotenciador(carlos);
console.log(carlos)
FiloDelInfinito.aplicarPotenciador(juan);
juan.Defender(carlos.Atacar());
console.log(juan);
carlos.Defender(juan.Atacar());
juan.Defender(carlos.Atacar());
carlos.Defender(juan.Atacar());
juan.Defender(carlos.Atacar());
carlos.Defender(juan.Atacar());
juan.Defender(carlos.Atacar());