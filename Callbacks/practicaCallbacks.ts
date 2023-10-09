console.log("------------------------------------")
console.log("Ejemplo 1 - Saludar");

function saludar(nombre, callback) {
    console.log(`Saludar, ${nombre}!`);
    callback(); //Llama a la funcion callback(despedirse) que se paso como parametro a la funcion saludar en
}

function despedirse() {
    console.log("Adios!");
}

saludar("Juan", despedirse);

console.log("------------------------------------")
console.log("Ejemplo 2 - Calcular promedio");
const calcularPromedio = (numeros: number[], callback: Function) => {
    const total = numeros.reduce((acumulado, actual) => acumulado + actual, 0)
    const promedio = total / numeros.length;
    console.log(`El promedio es ${promedio}`);
    callback();
}

const finalizaSistema = () => {
    console.log("Promedio Calculado");
}

const arrNumero: number[] = [4, 5, 65, 98, 12, 8, 33];

calcularPromedio(arrNumero, finalizaSistema);

console.log("------------------------------------")
console.log("Ejemplo 3 - Calcular promedio con la funcion Callback recibiendo un parametro");
const calcularPromedio2 = (numeros: number[], callback: Function) => {
    const total = numeros.reduce((acumulado, actual) => acumulado + actual, 0)
    const promedio = total / numeros.length;
    callback(promedio);
}

const finalizaSistema2 = (promedio: number) => {
    console.log(`El Promedio Calculado es ${promedio}`);
}

const arrNumero2: number[] = [14, 25, 65, 198, 12, 8, 33];

calcularPromedio2(arrNumero2, finalizaSistema2);
console.log("------------------------------------")


console.log("Ejemplo 4 - Calcular promedio con la funcion Callback recibiendo un parametro");
const calcularPromedio3 = (numeros: number[], callback: Function) => {
    const total = numeros.reduce((acumulado, actual) => acumulado + actual, 0)
    const promedio = total / numeros.length;
    callback(promedio);
}

const finalizaSistema3 = (promedio: number) => {
    console.log(`El Promedio Calculado es ${promedio}`);
}
const imprimirPromedio2Dig = (promedio: number) => {
    console.log(`El Promedio en 2 digitos es ${promedio.toFixed(2)}`);
}

const arrNumero3: number[] = [4, 56, 615, 98, 12, 81, 33];

calcularPromedio3(arrNumero3, finalizaSistema3);
calcularPromedio3(arrNumero3, imprimirPromedio2Dig);
console.log("------------------------------------")

console.log("Ejemplo 5 - Calcular promedio sin tener la funcion callback definida");
const calcularPromedio4 = (numeros: number[], callback: Function) => {
    const total = numeros.reduce((acumulado, actual) => acumulado + actual, 0)
    const promedio = total / numeros.length;
    callback(promedio);
}

const arrNumero4: number[] = [41, 5, 65, 98, 121, 81, 33];

calcularPromedio4(arrNumero4, (promedio: number) => {
    console.log(`Funcion anonima dice que el promedio es ${promedio}`)
});
console.log("------------------------------------")


console.log("Ejemplo 6 - Metodo REDUCE con funcion callback opcion 1");

const arrNumero5: number[] = [96, 15, 215, 8, 12, 1, 52];

const sumar = (valor1: number, valor2: number): number => {
    return valor1 + valor2;
}

const reduce = (arreglo: number[], valorInicial: number, callback: Function) => {
    let resultado = valorInicial;
    arreglo.forEach((valorArr) => {
        resultado = callback(resultado, valorArr);
    });
    return resultado;
}
let resultado = reduce(arrNumero5, 0, sumar);
console.log(resultado);

console.log("Ejemplo 7 - Metodo REDUCE  con funcion callback opcion 2");
//En esta linea de codigo a reduce se le pasa una funcion anonima que realiza la suma del arreglo de valores.
const sumaValores = arrNumero5.reduce((acumulado, actual) => acumulado + actual, 0);
//En esta linea de codigo no se pasa una funcion anonima sino que se pasa la funcion suma
const sumaValoresMifn = reduce(arrNumero5, 0, sumar);
//por eso en este consolelog las 2 funciones dan el mismo valor.
console.log(sumaValores, sumaValoresMifn);
//se podria hacer todo en una sola linea de codigo haciendo: 
const sumaValoresMifn2 = reduce(arrNumero5, 0, (acumulado: number, actual: number) => acumulado + actual);
console.log(sumaValoresMifn2);


console.log("FORMAS DE RETORNAR VALORES!!!!!!!!")
//se puede retornar un valor de las siguientes formas
//asi
const f2 = (acumulado: number, actual: number) => {
    return acumulado + actual;
}
//o asi directamente
const f1 = (acumulado: number, actual: number) => acumulado + actual;

