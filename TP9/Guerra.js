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
var Personaje = /** @class */ (function () {
    function Personaje(nombre, vida, ataque, defensa) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
    }
    Personaje.prototype.getNombre = function () {
        //console.log("Nombre: ",this.nombre);
        return this.nombre;
    };
    Personaje.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Personaje.prototype.getVida = function () {
        console.log("Vida: ", this.vida);
        return this.vida;
    };
    Personaje.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Personaje.prototype.getAtaque = function () {
        console.log("Ataque: ", this.ataque);
        return this.ataque;
    };
    Personaje.prototype.setDefensa = function (defensa) {
        this.defensa = defensa;
    };
    Personaje.prototype.getDefensa = function () {
        console.log("Defensa: ", this.defensa);
        return this.defensa;
    };
    Personaje.prototype.setAtaque = function (ataque) {
        this.ataque = ataque;
    };
    Personaje.prototype.atacar = function () {
        //let ataque: number = Math.floor(Math.random()*100)
        console.log(this.nombre, "ha generado daño por: ", this.ataque);
        return this.ataque;
    };
    Personaje.prototype.defender = function (ataqueRecibido) {
        this.vida = this.vida - ataqueRecibido;
        console.log("Cuidado! ", this.nombre, "te han atacado, ahora tu vida es: ", this.vida);
    };
    return Personaje;
}());
var Istari = /** @class */ (function (_super) {
    __extends(Istari, _super);
    function Istari() {
        return _super.call(this, "Gandalf", 1380, 221, 69) || this;
    }
    Istari.prototype.reducirDano = function () {
        this.defensa = this.defensa * 1.3;
        console.log("xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx");
        console.log("  Gandalf ha utilizado el Escudo de Orion, su defensa incremento un 30%");
        //console.log("Mentira, es tu vida pero eso lo tengo que cambiar");
        console.log("xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx");
    };
    return Istari;
}(Personaje));
var Dunedain = /** @class */ (function (_super) {
    __extends(Dunedain, _super);
    function Dunedain() {
        return _super.call(this, "Aragorn", 978, 199, 82) || this;
    }
    Dunedain.prototype.aumentarAtaque = function () {
        this.ataque = this.ataque * 1.2;
        console.log(" xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx");
        console.log("Aragorn ha utilizado el Mazo de la Justicia, su ataque incremento en un 20%");
        console.log(" xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx");
    };
    return Dunedain;
}(Personaje));
var Noldor = /** @class */ (function (_super) {
    __extends(Noldor, _super);
    function Noldor() {
        return _super.call(this, "Feanor", 1114, 206, 50) || this;
    }
    Noldor.prototype.incrementarVida = function () {
        this.vida = this.vida * 1.5;
        console.log("xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx");
        console.log("   Feanor ha utilizado el Elixir del Olimpo, su vida incremento un 50%");
        console.log("xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx -- xxx");
    };
    return Noldor;
}(Personaje));
var feanor = new Noldor();
var gandalf = new Istari();
var aragorn = new Dunedain();
console.log("Bienvenido al campo de batalla:", feanor.getNombre());
feanor.getAtaque();
feanor.getDefensa();
feanor.getVida();
feanor.incrementarVida();
feanor.getVida();
console.log("");
console.log("Bienvenido al campo de batalla:", gandalf.getNombre());
gandalf.getAtaque();
gandalf.getDefensa();
gandalf.getVida();
gandalf.reducirDano();
gandalf.getDefensa();
console.log("");
console.log("Bienvenido al campo de batalla:", aragorn.getNombre());
aragorn.getAtaque();
aragorn.getDefensa();
aragorn.getVida();
aragorn.aumentarAtaque();
aragorn.getAtaque();
console.log("");
// //Jugador2(aragorn) defiende ataque de Jugador1 
// //Jugador1(feanor) defiende ataque de Jugador2
var rondas = 1;
while (feanor.getVida() > 0 || aragorn.getVida() > 0) {
    console.log("Inicia la ", rondas, "ronda, preparate para combatir!");
    if (aragorn.getVida() < 0) {
        console.log("Jugador2 ha sido derrotado! Felicitaciones Jugador1 eres el vencedor");
    }
    else {
        aragorn.defender(feanor.atacar());
    }
    if (feanor.getVida() < 0) {
        console.log("Jugador1 ha sido derrotado! Felicitaciones Jugador2 eres el vencedor");
    }
    else {
        feanor.defender(aragorn.atacar());
    }
    rondas = rondas + 1;
    console.log("El combate aun no ha terminado! Continua!");
    console.log("xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX");
}
