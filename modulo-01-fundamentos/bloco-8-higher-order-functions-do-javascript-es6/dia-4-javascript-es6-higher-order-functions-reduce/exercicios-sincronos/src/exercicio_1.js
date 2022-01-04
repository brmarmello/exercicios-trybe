// 1. Somar todos os elementos do array `numeros`

// function soma() {
//   let total = 0;

//   numeros.forEach((value) => {
//     total += value;
//   });

//   return total;
// }

const numeros = [3, 4, 5, 6, 7, 8];

const funcaoReducer = (acumulador, valorCorrente, index) => {
  console.log('acumulador antes', acumulador);
  console.log('valor corrente', valorCorrente);
  console.log('index', index);
  acumulador += valorCorrente;
  console.log('acumulador depois', acumulador);
  console.log('----------------');
  return acumulador;
};

const somaComReduce = numeros.reduce(funcaoReducer);

console.log('Esse é o valor da soma do reduce: ', somaComReduce);
