const arrNum: number[] = [10, 20, 30, 40, 50, 60, 70, 80];

const buscarIndice = function(arreglo: number[], numeroABuscar: number): number {
    
    const findIndex = (arreglo: number[], callback: Function) => {
        let encontrado: number = -1;
        for (let i = 0; i < arreglo.length; i++) {
            const element = arreglo[i];
            const comprobar: boolean = callback(element);
            if (comprobar) {
                return encontrado = i;
            }
        }
        return encontrado;
    }

    //Funcion que retorna booleano true si son iguales false si no
    const evaluarNumeros = (val1: number, val2: number): boolean => val1 == val2;

    const indice = findIndex(arreglo, (arrayPosicion: number) => {
        return evaluarNumeros(arrayPosicion, numeroABuscar);
    })

    return indice;
};

console.log(buscarIndice(arrNum, 0));






