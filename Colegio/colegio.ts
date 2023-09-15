class Examen {
  private nombre: string;
  private nota: number;

  constructor(nombre: string, nota: number) {
    this.nombre = nombre;
    this.nota = nota;
  }

  getNombre(): string {
    return this.nombre;
  }

  getNota(): number {
    return this.nota;
  }
}

class Alumno {
  private nombre: string;
  private examenes: Examen[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.examenes = [];
  }

  getNombre(): string {
    return this.nombre;
  }

  agregarExamenRendido(examen: Examen) {
    this.examenes.push(examen);
  }

  calcularPromedio(): number {
    let notasTotales = 0;
    this.examenes.forEach((ex) => {
      notasTotales += ex.getNota();
    })
    return notasTotales / this.examenes.length;
  }
}

class Colegio {
  private alumnos: Alumno[];

  constructor() {
    this.alumnos = [];
  }

  agregarAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }

  calcularPromedio(): number {
    let notasTotales = 0;
    this.alumnos.forEach((ex) => {
      notasTotales += ex.calcularPromedio();
    })
    return notasTotales / this.alumnos.length;
  }
}

const ezulaica = new Alumno("Emiliano");
ezulaica.agregarExamenRendido(new Examen("Matematicas", 8));
ezulaica.agregarExamenRendido(new Examen("Lengua", 7));
ezulaica.agregarExamenRendido(new Examen("Civica", 7));
ezulaica.agregarExamenRendido(new Examen("Fisica", 10));

const tshiafinno = new Alumno("Thiago");
tshiafinno.agregarExamenRendido(new Examen("Matematicas", 7));
tshiafinno.agregarExamenRendido(new Examen("Lengua", 8));
tshiafinno.agregarExamenRendido(new Examen("Civica", 7));
tshiafinno.agregarExamenRendido(new Examen("Fisica", 9));

const colegio = new Colegio();
colegio.agregarAlumno(ezulaica);
colegio.agregarAlumno(tshiafinno);

console.log(`El promedio de Emiliano es ${ezulaica.calcularPromedio()}`);
console.log(`El promedio de Thiago es ${tshiafinno.calcularPromedio()}`);

console.log(`El colegio Nuestra Señora de la Constante tiene un promedio de: ${colegio.calcularPromedio()}`);