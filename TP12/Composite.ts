
// Componente base: Elemento gráfico
abstract class Graphic {
    abstract draw(): void;
}
  
// Clase hoja: Representa objetos individuales
class Circle extends Graphic {
    private name: string

    constructor(name: string) {
        super();
        this.name = name
    }

    public draw() {
        console.log(`Dibujando círculo [ ${this.name} ]`);
    }
}
  
// Clase hoja: Representa objetos individuales
class Square extends Graphic {
    private name: string

    constructor(name: string) {
        super();
        this.name = name
    }

    public draw() {
        console.log(`Dibujando cuadrado [ ${this.name} ]`);
    }
}
  
// Clase compuesta: Puede contener otros objetos (hojas o compuestos)
class Group extends Graphic {
    private name: string
    private children: Graphic[] = [];  

    constructor(name: string) {
        super();
        this.name = name
    }    

    public add(graphic: Graphic) {
        this.children.push(graphic);
    }

    public draw() {
        console.log(`Dibujando grupo: [ ${this.name} ]`);
        for (const child of this.children) {
        child.draw();
        }
    }
}
  
// Uso del patrón Composite
const circle1 = new Circle("Círculo 1");
const circle2 = new Circle("Círculo 2");
const square1 = new Square("Cuadrado 1");
const square2 = new Square("Cuadrado 2");

const group1 = new Group("Grupo A");
group1.add(circle1);
group1.add(square1);

const group2 = new Group("Grupo B");
group2.add(circle2);
group2.add(square2);

const topLevelGroup = new Group("Grupo Principal");
topLevelGroup.add(group1);
topLevelGroup.add(group2);

// Dibujar el árbol completo
topLevelGroup.draw();
