var PersonaN = /** @class */ (function () {
    function PersonaN(nombre, edad) {
        this.edad = edad;
        this.nombre = nombre;
    }
    PersonaN.prototype.getNombre = function () {
        return this.nombre;
    };
    PersonaN.prototype.getEdad = function () {
        return this.edad;
    };
    return PersonaN;
}());
var PersonaN2 = /** @class */ (function () {
    function PersonaN2(nombre, apellido, edad) {
        this.edad = edad;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    PersonaN2.prototype.getNombre = function () {
        return this.nombre;
    };
    PersonaN2.prototype.getEdad = function () {
        return this.edad;
    };
    PersonaN2.prototype.getApellido = function () {
        return this.apellido;
    };
    return PersonaN2;
}());
var personas2 = [];
personas2.push(new PersonaN("Mario Benitez", 43));
personas2.push(new PersonaN("Claudio Andretti", 28));
personas2.push(new PersonaN("Kiliam Mbape", 25));
var personasMap = personas2.map(function (pers) {
    var nap = pers.getNombre().split(" ");
    return new PersonaN2(nap[0], nap[1], pers.getEdad());
});
// console.log(personas2);
// console.log(personasMap);
var htmlArray = personasMap.map(function (pers) {
    return "<tr><td>".concat(pers.getNombre(), "</td><td>").concat(pers.getApellido(), "</td><td>").concat(pers.getEdad(), "</td></tr>");
});
// console.log(htmlArray);
var suma = [5, 9, 6, 8, 4, 5, 8, 4, 4].reduce(function (acumulado, actual) { return acumulado + actual; }, 0);
console.log(suma);
var sumaEdades = personasMap.reduce(function (acumulado, actual) { return acumulado + actual.getEdad(); }, 0);
console.log(sumaEdades / personasMap.length);
