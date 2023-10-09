console.log("Ejemplo 6 - Metodo REDUCE con funcion callback opcion 1");
var arrNumero5 = [96, 15, 215, 8, 12, 1, 52];
var arrNumero6 = [1, 1, 1, 1, 1, 1, 1];
var sumar = function (valor1, valor2) {
    return valor1 + valor2;
};
var reduce = function (arreglo, valorInicial, callback) {
    var resultado = valorInicial;
    arreglo.forEach(function (valorArr) {
        resultado = callback(resultado, valorArr);
    });
    console.log(resultado, "aaaa");
    return resultado;
};
var resultado2 = reduce(arrNumero5, 0, sumar);
console.log(resultado2);
console.log(arrNumero6.reduce(function (i, c) { return i + c; }, arrNumero5.reduce(function (i, c) { return i + c; }, 0)));
