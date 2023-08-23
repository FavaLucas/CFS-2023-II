abstract class Personaje {
  protected nombre: string;
  protected vida: number;
  protected ataque: number;
  protected defensa: number;


  public constructor(nombre: string, vida: number, ataque: number, defensa: number) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
  }
  public getNombre(): string {
    //console.log("Nombre: ",this.nombre);
    return this.nombre;
  }
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }
  public getVida(): number {
    console.log("Vida: ",this.vida);
    return this.vida;
  }
  public setVida(vida: number): void {
    this.vida = vida;
  }
  public getAtaque(): number {
    console.log("Ataque: ",this.ataque);
    return this.ataque;
  }
  public setDefensa(defensa: number): void {
    this.defensa = defensa;
  }
  public getDefensa(): number {
    console.log("Defensa: ",this.defensa);
    return this.defensa;
  }
  public setAtaque(ataque: number): void {
    this.ataque = ataque;
  }
  public atacar(): number {
    //let ataque: number = Math.floor(Math.random()*100)
    console.log(this.nombre, "ha generado daño por: ", this.ataque);
    return this.ataque;
  }
  public defender(ataqueRecibido: number): void {
    this.vida = this.vida - ataqueRecibido;
    console.log(
      "Cuidado! ",
      this.nombre,
      "te han atacado, ahora tu vida es: ",
      this.vida
    );
  }
}

interface EscudoDeOrion {
  reducirDano(): void;
}
interface MazoDeLaJusticia {
  aumentarAtaque(): void;
}
interface ElixirDelOlimpo {
  incrementarVida(): void;
}

class Istari extends Personaje implements EscudoDeOrion {
  public constructor() {
    super("Gandalf", 1380, 221, 69);
  }
  reducirDano(): void {
    this.defensa = this.defensa * 1.3;
    console.log("xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx")
    console.log("  Gandalf ha utilizado el Escudo de Orion, su defensa incremento un 30%");
    //console.log("Mentira, es tu vida pero eso lo tengo que cambiar");
    console.log("xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx")
  }
}

class Dunedain extends Personaje implements MazoDeLaJusticia {
  public constructor() {
    super("Aragorn", 978, 199, 82);
  }
  aumentarAtaque(): void {
    this.ataque = this.ataque * 1.2;
    console.log(" xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx")
    console.log("Aragorn ha utilizado el Mazo de la Justicia, su ataque incremento en un 20%");
    console.log(" xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx")
  }
}

class Noldor extends Personaje implements ElixirDelOlimpo {
  public constructor() {
    super("Feanor", 1114, 206, 50);
  }
  incrementarVida(): void {
    this.vida = this.vida * 1.5;
    console.log("xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx")
    console.log("   Feanor ha utilizado el Elixir del Olimpo, su vida incremento un 50%");
    console.log("xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx")
    
  }
}

let feanor = new Noldor();
let gandalf = new Istari();
let aragorn = new Dunedain();

console.log("Bienvenido al campo de batalla:",feanor.getNombre());
feanor.getAtaque();
feanor.getDefensa();
feanor.getVida();
feanor.incrementarVida();
feanor.getVida();
console.log("");

console.log("Bienvenido al campo de batalla:",gandalf.getNombre());
gandalf.getAtaque();
gandalf.getDefensa();
gandalf.getVida();
gandalf.reducirDano();
gandalf.getDefensa();
console.log("");

console.log("Bienvenido al campo de batalla:",aragorn.getNombre());
aragorn.getAtaque();
aragorn.getDefensa();
aragorn.getVida();
aragorn.aumentarAtaque();
aragorn.getAtaque();
console.log("");

// //Jugador2(aragorn) defiende ataque de Jugador1 
// //Jugador1(feanor) defiende ataque de Jugador2

let rondas: number = 1;
while (feanor.getVida() > 0 || aragorn.getVida() > 0) {
  console.log("Inicia la ", rondas, "ronda, preparate para combatir!");

  if (aragorn.getVida() < 0) {
    console.log(
      "Jugador2 ha sido derrotado! Felicitaciones Jugador1 eres el vencedor"
    );
  } else {
    aragorn.defender(feanor.atacar());
  }

  if (feanor.getVida() < 0) {
    console.log(
      "Jugador1 ha sido derrotado! Felicitaciones Jugador2 eres el vencedor"
    );
  } else {
    feanor.defender(aragorn.atacar());
  }
  rondas = rondas + 1;
  console.log("El combate aun no ha terminado! Continua!");
  console.log("xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX");
}
