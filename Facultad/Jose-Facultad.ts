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

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  getNombre(): string {
    return this.nombre;
  }
}

class Inscripto {
  private alumno: Alumno;
  private examenes: Examen[];

  constructor(alumno: Alumno) {
    this.alumno = alumno;
    this.examenes = [];
  }

  getAlumno(): Alumno {
    return this.alumno;
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

class Asignatura {
  private nombre: string;
  private inscriptos: Inscripto[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.inscriptos = [];
  }

  getNombre(): string {
    return this.nombre;
  }

  agregarInscripto(alumno: Alumno) {
    this.inscriptos.push(new Inscripto(alumno));
  }

  agregarExamen(alumno: Alumno, nota: number) {
    const indexAl = this.inscriptos.findIndex((ins) => alumno.getNombre() == ins.getAlumno().getNombre());
    if (indexAl >= 0) {
      this.inscriptos[indexAl].agregarExamenRendido(new Examen("", nota));
    } else {
      throw new Error("El alumno no esta inscripto");
    }
  }

  calcularPromedio() {
    let notasTotales = 0;
    this.inscriptos.forEach((ins) => {
      notasTotales += ins.calcularPromedio();
    })
    return notasTotales / this.inscriptos.length;
  }

  calcularPromedioAlumno(alumno: Alumno) {
    let notasTotales = 0;
    const inscripcionesAlumno = this.inscriptos.filter((ins) => ins.getAlumno().getNombre() == alumno.getNombre());
    inscripcionesAlumno.forEach((ins) => {
      notasTotales += ins.calcularPromedio();
    })
    return notasTotales / inscripcionesAlumno.length;
  }

  getAlumnosAsignatura(): Alumno[] {
    const alumnos: Alumno[] = [];
    this.inscriptos.forEach((ins) => {
      alumnos.push(ins.getAlumno());
    });
    return alumnos;
    /*
        return this.inscriptos.map((ins) => {
          return ins.getAlumno();
        });
    
        return this.inscriptos.map((ins) => ins.getAlumno());
    */
  }
}

class Colegio {
  private alumnos: Alumno[];
  private asignaturas: Asignatura[];
  constructor() {
    this.alumnos = [];
    this.asignaturas = [];
  }

  agregarAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }

  getAlumnos() {
    return this.alumnos;
  }

  agregarAsignatura(asignatura: Asignatura) {
    this.asignaturas.push(asignatura);
  }

  getAsignaturas() {
    return this.asignaturas;
  }

  calcularPromedio(): number {
    let notasTotales = 0;
    this.asignaturas.forEach((asig) => {
      notasTotales += asig.calcularPromedio();
    })
    return notasTotales / this.asignaturas.length;
  }

  calcularPromedioAlumno(alumno: Alumno): number {
    let notasTotales = 0;
    let cantPromedios = 0;
    this.asignaturas.forEach((as) => {
      const promedio = as.calcularPromedioAlumno(alumno);
      if (promedio > 0) {
        notasTotales += promedio;
        cantPromedios++;
      }
    })
    if (cantPromedios > 0) {
      return notasTotales / cantPromedios;
    }
    throw new Error("El alumno no tiene examenes");
  }
}

const ezulaica = new Alumno("Emiliano");
const tshiafinno = new Alumno("Thiago");
const blopez = new Alumno("Bernardo");
const jcoria = new Alumno("Jeremias");

const matematicas = new Asignatura("Matematicas");
const lengua = new Asignatura("Lengua");
const ingles = new Asignatura("Ingles");

matematicas.agregarInscripto(ezulaica);
matematicas.agregarInscripto(tshiafinno);
matematicas.agregarInscripto(blopez);

matematicas.agregarExamen(ezulaica, 7);
matematicas.agregarExamen(ezulaica, 9);
matematicas.agregarExamen(tshiafinno, 6);
matematicas.agregarExamen(blopez, 5);

lengua.agregarInscripto(blopez);
lengua.agregarInscripto(jcoria);

lengua.agregarExamen(blopez, 4);
lengua.agregarExamen(jcoria, 3);

ingles.agregarInscripto(blopez);
ingles.agregarInscripto(jcoria);

ingles.agregarExamen(blopez, 10);
ingles.agregarExamen(jcoria, 9);


const colegio = new Colegio();
colegio.agregarAlumno(ezulaica);
colegio.agregarAlumno(tshiafinno);
colegio.agregarAlumno(jcoria);
colegio.agregarAlumno(blopez);

colegio.agregarAsignatura(matematicas);
colegio.agregarAsignatura(lengua);
colegio.agregarAsignatura(ingles);

//solo conozco colegio
colegio.getAlumnos().forEach((alu) => {
  console.log(`El promedio de ${alu.getNombre()} es ${colegio.calcularPromedioAlumno(alu)}`);
});

colegio.getAsignaturas().forEach((asig) => {
  console.log(`El promedio de ${asig.getNombre()} es ${asig.calcularPromedio()}`);
});


/*
console.log(`El promedio de Emiliano es ${colegio.calcularPromedioAlumno(ezulaica)}`);
console.log(`El promedio de Thiago es ${colegio.calcularPromedioAlumno(ezulaica)}`);
console.log(`El promedio de Jeremias es ${colegio.calcularPromedioAlumno(jcoria)}`);
console.log(`El promedio de Bernardo es ${colegio.calcularPromedioAlumno(blopez)}`);*/
console.log();
console.log(`El promedio de Emiliano en matematicas es ${matematicas.calcularPromedioAlumno(ezulaica)}`);
console.log();
/*console.log(`El promedio de matematicas es ${matematicas.calcularPromedio()}`);
console.log(`El promedio de lengua es ${lengua.calcularPromedio()}`);
console.log(`El promedio de ingles es ${ingles.calcularPromedio()}`);*/
console.log();
console.log(`El colegio Nuestro Señor Factory tiene un promedio de: ${colegio.calcularPromedio()}`);