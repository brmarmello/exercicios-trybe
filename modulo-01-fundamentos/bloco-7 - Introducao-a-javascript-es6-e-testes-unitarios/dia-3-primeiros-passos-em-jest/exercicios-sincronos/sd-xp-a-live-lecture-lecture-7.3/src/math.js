/* eslint-disable object-shorthand */
function sum(value1, value2) {
  return value1 + value2;
}

/**
 * Implemente uma função `summationOf(number)` que recebe um número
 * inteiro e retorna o seu [somatório](https://pt.wikipedia.org/wiki/Somat%C3%B3rio).
 *
 * Por exemplo:
 *
 * - `summationOf(1)` retorna 1: soma de 1 até 1 = 1
 * - `summationOf(3)` retorna 6: soma de 1 até 3 = 1 + 2 + 3 = 6
 * - `summationOf(5)` retorna 15: soma de 1 até 5 = 1 + 2 + 3 + 4 + 5 = 15
 */
function summationOf(value) {
  if (value === '') {
    throw Error('summationOf deve receber um valor');
  }

  // number é um número?
  const number = Number(value);
  if (Number.isNaN(number)) {
    throw Error('summationOf deve receber apenas números');
  }

  let accumulator = 0;

  for (let index = 1; index <= value; index += 1) {
    accumulator += index;
  }

  return accumulator;
}

if (typeof module !== 'undefined') {
  module.exports = {
    sum: sum,
    summationOf: summationOf,
  };
}
