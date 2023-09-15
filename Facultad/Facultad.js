var Examen = /** @class */ (function () {
    function Examen(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }
    Examen.prototype.getNombre = function () {
        return this.nombre;
    };
    Examen.prototype.getNota = function () {
        return this.nota;
    };
    return Examen;
}());
var Alumno = /** @class */ (function () {
    function Alumno(nombre) {
        this.nombre = nombre;
        this.examenes = [];
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.agregarExamenRendido = function (examen) {
        this.examenes.push(examen);
    };
    Alumno.prototype.calcularPromedio = function () {
        var notasTotales = 0;
        this.examenes.forEach(function (ex) {
            notasTotales += ex.getNota();
        });
        return notasTotales / this.examenes.length;
    };
    return Alumno;
}());
var Colegio = /** @class */ (function () {
    function Colegio() {
        this.alumnos = [];
    }
    Colegio.prototype.agregarAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Colegio.prototype.calcularPromedio = function () {
        var notasTotales = 0;
        this.alumnos.forEach(function (ex) {
            notasTotales += ex.calcularPromedio();
        });
        return notasTotales / this.alumnos.length;
    };
    return Colegio;
}());
var ezulaica = new Alumno("Emiliano");
ezulaica.agregarExamenRendido(new Examen("Matematicas", 8));
ezulaica.agregarExamenRendido(new Examen("Lengua", 7));
ezulaica.agregarExamenRendido(new Examen("Civica", 7));
ezulaica.agregarExamenRendido(new Examen("Fisica", 10));
var tshiafinno = new Alumno("Thiago");
tshiafinno.agregarExamenRendido(new Examen("Matematicas", 7));
tshiafinno.agregarExamenRendido(new Examen("Lengua", 8));
tshiafinno.agregarExamenRendido(new Examen("Civica", 7));
tshiafinno.agregarExamenRendido(new Examen("Fisica", 9));
var colegio = new Colegio();
colegio.agregarAlumno(ezulaica);
colegio.agregarAlumno(tshiafinno);
console.log("El promedio de Emiliano es ".concat(ezulaica.calcularPromedio()));
console.log("El promedio de Thiago es ".concat(tshiafinno.calcularPromedio()));
console.log("El colegio Nuestra Se\u00F1ora de la Constante tiene un promedio de: ".concat(colegio.calcularPromedio()));
