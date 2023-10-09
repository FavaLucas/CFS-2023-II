var arrNum = [10, 20, 30, 40, 50, 60, 70, 80];
var funcionNueva = function (arreglo, numeroABuscar) {
    var findIndex = function (arreglo, callback) {
        var encontrado = -1;
        for (var i = 0; i < arreglo.length; i++) {
            var element = arreglo[i];
            var comprobar = callback(element);
            if (comprobar) {
                return encontrado = i;
            }
        }
        return encontrado;
    };
    //Funcion que retorna booleano true si son iguales false si no
    var evaluarNumeros = function (val1, val2) { return val1 == val2; };
    var indice = findIndex(arreglo, function (arrayPosicion) {
        return evaluarNumeros(arrayPosicion, numeroABuscar);
    });
    return indice;
};
console.log(funcionNueva(arrNum, 0));
