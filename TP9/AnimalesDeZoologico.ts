interface Animal {
    emitirSonido(): void;
    mostrarInfo(): void;
}

abstract class AnimalDeZoo implements Animal {
    protected nombre: string;
    protected especie: string;

    public constructor(nombre: string, especie: string) {
        this.especie = especie;
        this.nombre = nombre;


    }

    abstract emitirSonido(): void;

    public mostrarInfo(): void {
        console.log(this.especie)
        console.log(this.nombre)
    }


}

class Leon extends AnimalDeZoo {
    private peso: number;
    private habitat: string;

    public constructor(peso: number, habitat: string, nombre: string, especie: string) {
        super(nombre, especie)

        this.peso = peso;
        this.habitat = habitat;

    }

    public emitirSonido(): void {
        console.log("............")
        console.log("ruge")
        console.log("............")

    }



}

class Delfin extends AnimalDeZoo implements Truco {


    public constructor(nombre: string, especie: string) {
        super(nombre, especie)

    }

    public emitirSonido(): void {
        console.log("............")
        console.log("iiiiii")
        console.log("............")

    }

    public realizarTruco(): void {
        console.log("............")
        console.log("saludar con la aleta")
        console.log("............")
    }


}

interface Truco {
    realizarTruco(): void;
}

let leoncito = new Leon(150, "savana", "cacho", "felino");
let delfincito = new Delfin("flipper", "mamifero acuatico");
let leoncito2 = new Leon(150, "savana", "cacho", "felino");
let delfincito2 = new Delfin("flipper", "mamifero acuatico");

leoncito.emitirSonido()
delfincito.realizarTruco()


let animales: AnimalDeZoo[] = [];
animales.push(leoncito, delfincito, leoncito2, delfincito2);

animales.forEach(item => {
    item.emitirSonido();
    item.mostrarInfo();
});

let trucoAnimales: Truco[] = [];
trucoAnimales.push(delfincito, delfincito2);

trucoAnimales.forEach(item => {
    item.realizarTruco();

});