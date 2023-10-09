console.log("Ejemplo 6 - Metodo REDUCE con funcion callback opcion 1");

const arrNumero5: number[] = [96, 15, 215, 8, 12, 1, 52];
//const arrNumero6: number[] = [1, 1, 1, 1, 1, 1, 1];

const reduce = (arreglo: number[], valorInicial: number, callback: Function) => {
    let resultado = valorInicial;
    arreglo.forEach((valorArr) => {
        resultado = callback(resultado, valorArr);
    });
    return resultado;
}
const sumar = (valor1: number, valor2: number): number => {
    return valor1 + valor2;
}

let resultado2 = reduce(arrNumero5, 0, sumar);
console.log(resultado2);


//console.log(arrNumero5.reduce((i, c) => i + c, 0));
//console.log(arrNumero6.reduce((i, c) => i + c,arrNumero5.reduce((i, c) => i + c,0)));



