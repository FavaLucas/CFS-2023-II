interface Potenciable {
  setFactorAtaque(factor: number): void;
  setFactorDefensa(factor: number): void;
  setFactorVida(factor: number): void;
}

class Personaje implements Potenciable {
  protected nombre: string;
  protected vida: number;
  protected valorAtaque: number;

  protected factorAtaque: number;
  protected factorDefensa: number;

  constructor(nombre: string, vida: number, valorAtaque: number) {
    this.nombre = nombre;
    this.vida = vida;
    this.valorAtaque = valorAtaque;
    this.factorAtaque = 1;
    this.factorDefensa = 1;
  }

  atacar(valorDado: number): number {
    const valorAtaque = this.valorAtaque * valorDado * this.factorAtaque;
    console.log(`${this.nombre} ataca con ${valorAtaque} puntos de daño`);
    return valorAtaque;
  }

  defender(puntosDanio: number) {
    if (this.factorDefensa != 1) {
      console.log(`${this.nombre} defiende reduciendo el ataque a ${puntosDanio * this.factorDefensa}`)
    }
    this.vida = this.vida - (puntosDanio * this.factorDefensa);
  }

  getNombre() {
    return this.nombre;
  }

  estaVivo() {
    return this.vida > 0;
  }

  setFactorAtaque(factor: number): void {
    this.factorAtaque = factor;
  }

  setFactorDefensa(factor: number): void {
    this.factorDefensa = factor;
  }

  setFactorVida(factor: number): void {
    this.vida = this.vida * factor;
    console.log(`${this.nombre} incrementa su vida a ${this.vida}`);
  }
}

abstract class Potenciador {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  abstract usarPotenciador(objeto: Potenciable): void;
}

class EscudoOrion extends Potenciador {

  constructor() {
    super('Escudo de Orion');
  }

  usarPotenciador(objeto: Potenciable): void {
    objeto.setFactorDefensa(0.7);
  }
}

class MazoJusticia extends Potenciador {

  constructor() {
    super('Mazo de la Justicia');
  }

  usarPotenciador(objeto: Potenciable): void {
    objeto.setFactorAtaque(1.2);
  }
}

class ElixirOlimpo extends Potenciador {

  constructor() {
    super('Elixir del Olimpo');
  }

  usarPotenciador(objeto: Potenciable): void {
    objeto.setFactorVida(1.5);
  }
}


class Mago extends Personaje {
  constructor(nombre: string) {
    super(nombre, 360, 10);
  }
}

class Guerrero extends Personaje {
  constructor(nombre: string) {
    super(nombre, 180, 20);
  }
}

class Cofre implements Potenciable {
  protected resistencia: number;
  protected nombre: string;
  protected premio: string;
  protected factorDefensa: number;

  constructor(nombre: string, premio: string) {
    this.nombre = nombre;
    this.premio = premio;
    this.resistencia = 250;
    this.factorDefensa = 1;
  }

  defender(puntosDanio: number) {
    if (this.factorDefensa != 1) {
      console.log(`${this.nombre} defiende reduciendo el ataque a ${puntosDanio * this.factorDefensa}`)
    }
    this.resistencia = this.resistencia - (puntosDanio * this.factorDefensa);
  }

  estaAbierto() {
    return this.resistencia <= 0;
  }

  getPremio() {
    if (this.estaAbierto()) {
      return this.premio;
    }
    return 'Nada';
  }

  getNombre() {
    return this.nombre;
  }

  setFactorAtaque(factor: number): void {
    // sin implementacion requerida
  }

  setFactorDefensa(factor: number): void {
    this.factorDefensa = factor;
  }

  setFactorVida(factor: number): void {
    this.resistencia = this.resistencia * factor;
  }
}

// ---------------------------------------------------------------------------------
const tirarDado = () => {
  let alazar: number = Math.random() * 6;
  return Math.ceil(alazar);
}

const hp: Personaje = new Mago('Harry Potter');
const gr: Personaje = new Guerrero('The Witcher');
const mazo = new MazoJusticia();
const elixir = new ElixirOlimpo();
const escudo = new EscudoOrion();

mazo.usarPotenciador(gr);
escudo.usarPotenciador(hp);
elixir.usarPotenciador(hp);

const cofreGanado = new Cofre('LACup Winner', '300 monedas de oro');
escudo.usarPotenciador(cofreGanado);

while (hp.estaVivo() && gr.estaVivo()) {
  gr.defender(hp.atacar(tirarDado()));
  hp.defender(gr.atacar(tirarDado()));
}
console.log('Termino la batalla')
if (!hp.estaVivo()) {
  console.log(`${hp.getNombre()} yace muerto en el campo de batalla`)
} else {
  while (!cofreGanado.estaAbierto()) {
    cofreGanado.defender(hp.atacar(tirarDado()));
  }
  console.log(`${hp.getNombre()} gano ${cofreGanado.getPremio()} por abrir el cofre`);
}
if (!gr.estaVivo()) {
  console.log(`${gr.getNombre()} yace muerto en el campo de batalla`)
} else {
  while (!cofreGanado.estaAbierto()) {
    cofreGanado.defender(gr.atacar(tirarDado()));
  }
  console.log(`${gr.getNombre()} gano ${cofreGanado.getPremio()} por abrir el cofre`);
}
