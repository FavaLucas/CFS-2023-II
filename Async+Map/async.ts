const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

const leerNumero = async () => {
  let numero: number = 33;
  await delay(10000);
  return numero;
}

const leerNumero2 = async () => {
  let numero: number = 44;
  await delay(10000);
  return numero;
}

// Ejecucion secuencial con THEN
const ejecutar = () => {
  console.log(new Date())
  leerNumero().then((valorRetornado: number) => {
    leerNumero2().then((valorRetornado2) => {
      console.log(valorRetornado + valorRetornado2);
      console.log(new Date())
    })
  });
}

// Ejecucion en paralelo con promesas
const ejecutarParalelo = () => {
  console.log(new Date())
  let promesa1: Promise<number> = leerNumero();
  let promesa2: Promise<number> = leerNumero2();
  const arrPromesas = [promesa1, promesa2];
  Promise.all(arrPromesas).then((valor) => {
    console.log(valor.reduce((acumulado, actual) => acumulado + actual, 0));
    console.log(new Date());
  });
}
// ejecutar();
// ejecutarParalelo();

// Ejecucion secuencial con THEN
const ejecutarEc6 = async () => {
  console.log(new Date());
  const valorRetornado = await leerNumero();
  const valorRetornado2 = await leerNumero2();
  console.log(valorRetornado + valorRetornado2);
  console.log(new Date());
}

const ejecutarParaleloEc6 = async () => {
  console.log(new Date())
  let promesa1: Promise<number> = leerNumero();
  let promesa2: Promise<number> = leerNumero2();
  const arrPromesas = [promesa1, promesa2];
  // estan resueltas por el await
  const promesasResueltas = await Promise.all(arrPromesas);
  const suma = promesasResueltas.reduce((acumulado, actual) => acumulado + actual, 0);
  console.log(suma);
  console.log(new Date());
}

//ejecutarEc6();
ejecutarParaleloEc6();


