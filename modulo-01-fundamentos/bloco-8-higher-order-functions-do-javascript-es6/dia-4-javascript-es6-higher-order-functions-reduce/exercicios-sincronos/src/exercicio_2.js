// Encontre o maior valor no array de numeros

const numeros = [3, 4, 5, 6, 7, 8];

const funcaoReducer = (acumulador, valorCorrente) => {
  console.log('acc', acumulador);
  console.log('valor', valorCorrente);
  if (valorCorrente > acumulador) {
    acumulador = valorCorrente;
    console.log('acc depois', acumulador);
    // return acumulador;
  }
  return acumulador;
};

const maiorNumero = numeros.reduce(funcaoReducer);

console.log('O maior valor é : ', maiorNumero);