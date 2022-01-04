// O que é o reduce??????
// É uma Hof, e como as outras funciona como um laço de repetição mas é muito mais poderosa.
// PQ? pq podemos retornar o que quisermos com o reduce, fazer qualquer combinação que quisermos!
// Como funciona?

const numeros = [2, 3, 4, 5];

const funcaoReducer = (acumulador, valorCorrente, index, array) => {
  console.log('acumulador antes', acumulador);
  console.log('valor corrente', valorCorrente);
  // console.log('index', index);
  // console.log('array', array);
  if (valorCorrente % 2 !== 0) {
    acumulador[`${valorCorrente}`] = valorCorrente;
    console.log('acumulador dentro', acumulador);
    console.log('-------------------');
    return acumulador;
  }
  // acumulador = true;
  console.log('acumulador depois', acumulador);
  console.log('-------------------');
  return acumulador;
};

const resultadoReduce = numeros.reduce(funcaoReducer, {});

console.log('O valor do reduce é: ', resultadoReduce);
