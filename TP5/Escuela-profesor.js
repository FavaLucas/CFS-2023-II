var Alumno = /** @class */ (function () {
    function Alumno(dni, nombre, nota) {
        this.dni = dni;
        this.nombre = nombre;
        this.nota = nota;
        if (nota >= 7)
            this.aprobado = true;
        else
            this.aprobado = false;
    }
    Alumno.prototype.estaAprobado = function () {
        if (this.nota >= 7)
            return true;
        else
            return false;
        //return this.aprobado;
    };
    Alumno.prototype.SetNota = function (nota) {
        this.nota = nota;
        if (nota >= 7)
            this.aprobado = true;
        else
            this.aprobado = false;
    };
    Alumno.prototype.GetDNI = function () {
        return this.dni;
    };
    return Alumno;
}());
var Profesor = /** @class */ (function () {
    function Profesor(nombre, materia, alumnos) {
        this.nombre = nombre;
        this.materia = materia;
        this.alumnos = alumnos;
        this.activo = true;
    }
    Profesor.prototype.GetNombre = function () {
        return this.nombre;
    };
    Profesor.prototype.estaActivo = function () {
        return this.activo;
    };
    Profesor.prototype.SetEstado = function (estado) {
        this.activo = estado;
    };
    Profesor.prototype.asignarAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Profesor.prototype.quitarAlumno = function (alumno) {
        for (var i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].GetDNI() == alumno.GetDNI()) {
                this.alumnos.splice(i, 1);
                break;
            }
        }
    };
    Profesor.prototype.listarAlumnos = function () {
        console.log(this.alumnos);
    };
    return Profesor;
}());
var Escuela = /** @class */ (function () {
    function Escuela(nombre) {
        this.nombre = nombre;
        this.profesores = [];
        this.alumnos = [];
    }
    ///
    Escuela.prototype.matricularAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Escuela.prototype.despedirAlumno = function (alumno) {
        for (var i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].GetDNI() == alumno.GetDNI()) {
                this.alumnos.splice(i, 1);
                break;
            }
        }
    };
    Escuela.prototype.listarAlumnos = function () {
        console.log(this.alumnos);
    };
    ///
    Escuela.prototype.contratarProfesor = function (profesor) {
        this.profesores.push(profesor);
    };
    Escuela.prototype.despedirProfesor = function (profesor) {
        for (var i = 0; i < this.profesores.length; i++) {
            if (this.profesores[i].GetNombre() == profesor.GetNombre()) {
                this.profesores[i].SetEstado(false);
                break;
            }
        }
    };
    Escuela.prototype.listarProfesores = function () {
        console.log(this.profesores);
    };
    return Escuela;
}());
var miEscuela = new Escuela("Escuela IT");
var alumno1 = new Alumno(111111, "Juan", 7);
var alumno2 = new Alumno(222222, "Maria", 8);
var alumno3 = new Alumno(333333, "Diego", 4);
var alumno4 = new Alumno(444444, "Andrea", 7);
var alumnosP1 = [alumno1, alumno2];
var profe1 = new Profesor("Jose", "POO", alumnosP1);
var alumnosP2 = [alumno3, alumno4];
var profe2 = new Profesor("Adriana", "Javascript", alumnosP2);
miEscuela.matricularAlumno(alumno1);
miEscuela.matricularAlumno(alumno2);
miEscuela.matricularAlumno(alumno3);
miEscuela.matricularAlumno(alumno4);
miEscuela.contratarProfesor(profe1);
miEscuela.contratarProfesor(profe2);
console.log("Listado de Alumnos");
miEscuela.listarAlumnos();
console.log("Listado de Profesores");
miEscuela.listarProfesores();
