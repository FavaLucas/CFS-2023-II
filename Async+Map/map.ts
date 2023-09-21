class PersonaN {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.edad = edad;
    this.nombre = nombre;
  }

  getNombre(): string {
    return this.nombre;
  }

  getEdad(): number {
    return this.edad;
  }
}

class PersonaN2 {
  nombre: string;
  apellido: string;
  edad: number;

  constructor(nombre: string, apellido: string, edad: number) {
    this.edad = edad;
    this.nombre = nombre;
    this.apellido = apellido;
  }

  getNombre(): string {
    return this.nombre;
  }

  getEdad(): number {
    return this.edad;
  }

  getApellido(): string {
    return this.apellido;
  }
}


const personas2: PersonaN[] = [];
personas2.push(new PersonaN("Mario Benitez", 43));
personas2.push(new PersonaN("Claudio Andretti", 28));
personas2.push(new PersonaN("Kiliam Mbape", 25));

const personasMap: PersonaN2[] = personas2.map((pers) => {
  const nap = pers.getNombre().split(" ");
  return new PersonaN2(nap[0], nap[1], pers.getEdad());
});

// console.log(personas2);
// console.log(personasMap);

const htmlArray = personasMap.map((pers) => {
  return `<tr><td>${pers.getNombre()}</td><td>${pers.getApellido()}</td><td>${pers.getEdad()}</td></tr>`
});

// console.log(htmlArray);

const suma = [5, 9, 6, 8, 4, 5, 8, 4, 4].reduce((acumulado, actual) => acumulado + actual, 0);
console.log(suma);

const sumaEdades = personasMap.reduce((acumulado, actual) => acumulado + actual.getEdad(), 0);
console.log(sumaEdades / personasMap.length);