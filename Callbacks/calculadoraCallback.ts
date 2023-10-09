const calcularOperacion = (val1: number, val2: number, operacion: Function) => {
    const total = operacion(val1, val2);
    console.log(`El resultado de su operacion es ${total}`);
};

const sumar = (val1: number, val2: number) => val1 + val2;
const restar = (val1: number, val2: number) => val1 - val2;
const multiplicar = (val1: number, val2: number) => val1 * val2;
const dividir = (val1: number, val2: number) => val1 / val2;

calcularOperacion(10, 20, sumar);
calcularOperacion(20, 8, restar);
calcularOperacion(2, 9, multiplicar);
calcularOperacion(100, 5, dividir);