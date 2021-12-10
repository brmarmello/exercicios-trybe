/**
 * Retorna o produto da multiplicação entre dois números.
 *
 * @param {number} fator1 primeiro fator da multiplicação
 * @param {number} fator2 segundo fator da multiplicação
 */
function multiplicar(fator1, fator2) {
  let acumulador = 0;

  for (let contador = 0; contador < fator2; contador += 1) {
    acumulador += fator1;
  }

  return acumulador;
}

const result = multiplicar(4, 5);
console.log(result);
