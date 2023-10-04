const arrNumero: number[] = [4, 5, 66, 22, 99, 12, 33];
const calcularPromedio = (numeros: number[], callback?: Function) => {
  const total = numeros.reduce((acumulado, actual) => acumulado + actual, 0);
  const promedio = total / numeros.length;
  if (callback) {
    callback(promedio);
  } else {
    console.log('Sin Callback');
  }
}

const finalizaSistema = (promedio: number) => {
  console.log(`El promedio calculado es ${promedio}`);
}

const imprimirPromedio2Dig = (promedio: number) => {
  console.log(`El promedio calculado es ${promedio.toFixed(2)}`);
}


// calcularPromedio(arrNumero, finalizaSistema);
calcularPromedio(arrNumero, imprimirPromedio2Dig);
// calcularPromedio(arrNumero, (promedio: number) => {
//   console.log(`Funcion anonima dice que el promedio es ${promedio}`)
// });
// calcularPromedio(arrNumero);
// calcularPromedio(arrNumero, () => { });




const reduce = (arreglo: number[], callback: Function, valorInicial: number) => {
  let resultado = valorInicial;
  arreglo.forEach((valorArr) => {
    resultado = callback(resultado, valorArr);
  });
  return resultado;
};

const findIndex = (arreglo: number[], callback: Function) => {
  let resultado = -1;
  for (let index = 0; index < arreglo.length; index++) {
    const elemento = arreglo[index];
    const esElIndice = callback(elemento);
    if (esElIndice) {
      resultado = index;
    }
  }
  return resultado;
};

const evaluarSiIguales = (valor1: number, valor2: number) => {
  return valor1 == valor2;
}

const indice = findIndex(arrNumero, (val: number) => {
  return evaluarSiIguales(val, 22)
});

(elemento: number) => { return elemento == 22 };

console.log(`el indice del 22 es: ${indice}`);
// findIndex // es un metodo que dado un callback que retorna un boolean indicando 
// si lo encontro retorna la posicion del arreglo sino lo encuentra -1
// pasar el arreglo por parametro.

const sumaValoresMifn = reduce(arrNumero, (acumulado: number, actual: number) => acumulado + actual, 0);


const f1 = (acumulado: number, actual: number) => acumulado + actual;

const f2 = (acumulado: number, actual: number) => {
  return acumulado + actual;
}

const dobleArrNumero = arrNumero.map((val) => val * 2);


const filter = (arrNumeros: any[], callback: Function): any[] => {
  const retorno: any[] = [];
  for (let index = 0; index < arrNumeros.length; index++) {
    const elemento = arrNumeros[index];

    //es parte del retorno todo elemento que llamando al callback de true
    if (callback(elemento)) {
      retorno.push(elemento);
    }
  }
  return retorno;
}

const esMenora10 = (valor: number): boolean => {
  return valor < 10;
}

const arregloFiltrado = filter(arrNumero, (persona: any): boolean => persona.getEdad() < 18);
const arregloFiltrado2 = filter(arrNumero, (valor: number): boolean => valor > 10);
console.log(arregloFiltrado);
console.log(arregloFiltrado2);