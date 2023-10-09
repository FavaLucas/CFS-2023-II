console.log("------------------------------------");
console.log("Ejemplo 1 - Saludar");
function saludar(nombre, callback) {
    console.log("Saludar, ".concat(nombre, "!"));
    callback(); //Llama a la funcion callback(despedirse) que se paso como parametro a la funcion saludar en
}
function despedirse() {
    console.log("Adios!");
}
saludar("Juan", despedirse);
console.log("------------------------------------");
console.log("Ejemplo 2 - Calcular promedio");
var calcularPromedio = function (numeros, callback) {
    var total = numeros.reduce(function (acumulado, actual) { return acumulado + actual; }, 0);
    var promedio = total / numeros.length;
    console.log("El promedio es ".concat(promedio));
    callback();
};
var finalizaSistema = function () {
    console.log("Promedio Calculado");
};
var arrNumero = [4, 5, 65, 98, 12, 8, 33];
calcularPromedio(arrNumero, finalizaSistema);
console.log("------------------------------------");
console.log("Ejemplo 3 - Calcular promedio con la funcion Callback recibiendo un parametro");
var calcularPromedio2 = function (numeros, callback) {
    var total = numeros.reduce(function (acumulado, actual) { return acumulado + actual; }, 0);
    var promedio = total / numeros.length;
    callback(promedio);
};
var finalizaSistema2 = function (promedio) {
    console.log("El Promedio Calculado es ".concat(promedio));
};
var arrNumero2 = [14, 25, 65, 198, 12, 8, 33];
calcularPromedio2(arrNumero2, finalizaSistema2);
console.log("------------------------------------");
console.log("Ejemplo 4 - Calcular promedio con la funcion Callback recibiendo un parametro");
var calcularPromedio3 = function (numeros, callback) {
    var total = numeros.reduce(function (acumulado, actual) { return acumulado + actual; }, 0);
    var promedio = total / numeros.length;
    callback(promedio);
};
var finalizaSistema3 = function (promedio) {
    console.log("El Promedio Calculado es ".concat(promedio));
};
var imprimirPromedio2Dig = function (promedio) {
    console.log("El Promedio en 2 digitos es ".concat(promedio.toFixed(2)));
};
var arrNumero3 = [4, 56, 615, 98, 12, 81, 33];
calcularPromedio3(arrNumero3, finalizaSistema3);
calcularPromedio3(arrNumero3, imprimirPromedio2Dig);
console.log("------------------------------------");
console.log("Ejemplo 5 - Calcular promedio sin tener la funcion callback definida");
var calcularPromedio4 = function (numeros, callback) {
    var total = numeros.reduce(function (acumulado, actual) { return acumulado + actual; }, 0);
    var promedio = total / numeros.length;
    callback(promedio);
};
var arrNumero4 = [41, 5, 65, 98, 121, 81, 33];
calcularPromedio4(arrNumero4, function (promedio) {
    console.log("Funcion anonima dice que el promedio es ".concat(promedio));
});
console.log("------------------------------------");
console.log("Ejemplo 6 - Metodo REDUCE con funcion callback opcion 1");
var arrNumero5 = [96, 15, 215, 8, 12, 1, 52];
var sumar = function (valor1, valor2) {
    return valor1 + valor2;
};
var reduce = function (arreglo, valorInicial, callback) {
    var resultado = valorInicial;
    arreglo.forEach(function (valorArr) {
        resultado = callback(resultado, valorArr);
    });
    return resultado;
};
console.log("Ejemplo 7 - Metodo REDUCE  con funcion callback opcion 2");
//En esta linea de codigo a reduce se le pasa una funcion anonima que realiza la suma del arreglo de valores.
var sumaValores = arrNumero5.reduce(function (acumulado, actual) { return acumulado + actual; }, 0);
//En esta linea de codigo no se pasa una funcion anonima sino que se pasa la funcion suma
var sumaValoresMifn = reduce(arrNumero5, 0, sumar);
//por eso en este consolelog las 2 funciones dan el mismo valor.
console.log(sumaValores, sumaValoresMifn);
//se podria hacer todo en una sola linea de codigo haciendo: 
var sumaValoresMifn2 = reduce(arrNumero5, 0, function (acumulado, actual) { return acumulado + actual; });
console.log(sumaValoresMifn2);
console.log("FORMAS DE RETORNAR VALORES!!!!!!!!");
//se puede retornar un valor de las siguientes formas
//asi
var f2 = function (acumulado, actual) {
    return acumulado + actual;
};
//o asi directamente
var f1 = function (acumulado, actual) { return acumulado + actual; };
