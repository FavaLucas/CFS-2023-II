var calcularOperacion = function (val1, val2, operacion) {
    var total = operacion(val1, val2);
    console.log("El resultado de su operacion es ".concat(total));
};
var sumar = function (val1, val2) { return val1 + val2; };
var restar = function (val1, val2) { return val1 - val2; };
var multiplicar = function (val1, val2) { return val1 * val2; };
var dividir = function (val1, val2) { return val1 / val2; };
calcularOperacion(10, 20, sumar);
calcularOperacion(20, 8, restar);
calcularOperacion(2, 9, multiplicar);
calcularOperacion(100, 5, dividir);
