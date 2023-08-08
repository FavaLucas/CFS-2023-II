var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(dni, nombre, edad, ocupacion) {
        this.dni = dni;
        this.nombre = nombre;
        this.edad = edad;
        this.ocupacion = ocupacion;
    }
    return Persona;
}());
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(dni, nombre, edad) {
        return _super.call(this, dni, nombre, edad, "Jugador de futbol") || this;
    }
    Futbolista.prototype.getPosicion = function () {
        return this.posicion;
    };
    Futbolista.prototype.setPosicion = function (pos) {
        this.posicion = pos;
    };
    return Futbolista;
}(Persona));
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(dni, nombre, edad) {
        return _super.call(this, dni, nombre, edad, "Entrenador") || this;
    }
    return Entrenador;
}(Persona));
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(dni, nombre, edad) {
        return _super.call(this, dni, nombre, edad, "Masajista") || this;
    }
    return Masajista;
}(Persona));
var Equipo = /** @class */ (function () {
    function Equipo(entrenador, masajista) {
        this.dt = entrenador;
        this.masajista = masajista;
        this.jugadores = [];
        //this.dt = new Entrenador(0, "", 0);
        //this.masajista = new Masajista(0, "", 0);
    }
    Equipo.prototype.contratarEntrenador = function (entrenador) {
        this.dt = entrenador;
    };
    Equipo.prototype.contratarMasajista = function (masajista) {
        this.masajista = masajista;
    };
    Equipo.prototype.contratarJugador = function (jugador) {
        this.jugadores.push(jugador);
    };
    Equipo.prototype.despedirJugador = function (jugador) {
    };
    Equipo.prototype.listarJugadores = function () {
    };
    Equipo.prototype.listarJugadoresPorPosicion = function (pos) {
        for (var i = 0; i < this.jugadores.length; i++) {
            if (this.jugadores[i].getPosicion() == pos) {
                console.log(this.jugadores[i]);
            }
        }
    };
    return Equipo;
}());
var dt = new Entrenador(1111111, "Coco Basile", 80);
var masa1 = new Masajista(22222, "Jose Velez", 58);
var equipoA = new Equipo(dt, masa1);
var jug1 = new Futbolista(44444, "Bati", 45);
jug1.setPosicion("Delantero");
var jug2 = new Futbolista(44444, "Messi", 36);
jug2.setPosicion("Delantero");
var jug3 = new Futbolista(44444, "Romero", 30);
jug3.setPosicion("Defensor");
equipoA.contratarJugador(jug1);
equipoA.contratarJugador(jug2);
equipoA.contratarJugador(jug3);
console.log("-------------------------");
console.log("Equipo completo");
console.log("-------------------------");
console.log(equipoA);
console.log("-------------------------");
console.log("-------------------------");
console.log("Defensores");
console.log("-------------------------");
equipoA.listarJugadoresPorPosicion("Defensor");
