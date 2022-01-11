/*
 * Implementação utilizando Callbacks das funções
 * do banco de dados em memória.
 */

/**
 * Este array simula uma coleção em um banco de dados não-relacional.
 */
const db = [
  {
    id: 123,
    name: 'Xuxa',
    favoriteFood: 'algodão doce',
    greeting: 'Oi galerinha!',
  },
  {
    id: 321,
    name: 'João Corça',
    favoriteFood: 'churrasco',
    greeting: 'Salve!',
  },
  {
    id: 404,
    name: 'Faustina O\'Missing',
    favoriteFood: null,
    greeting: 'Oi.',
  },
];

/**
 * Esta variável abaixo, juntamente com as duas funções, hackTheDb()
 * e restartDb() permitem controlar a simulação de uma falha.
 */
let shouldFail = false;

function forceFail() {
  shouldFail = true;
}

function reset() {
  shouldFail = false;
}

/**
 * Esta função utiliza a função de cima para montar uma string a partir da
 * pessoa usuária recuperada do "banco de dados".
 *
 * @param {*} filter: uma função com a regra para filtro.
 *    Deve retornar um boolean.
 * @param {*} callback uma função que receberá o resultado, seja um
 *    sucesso ou uma falha.
 */
function createPresentationMessage(personName, callback) {
  setTimeout(() => {
    if (shouldFail) {
      return callback(new Error('Explodiu'), null);
    }

    const result = db.find((item) => item.name === personName);
    const { greeting, name, favoriteFood } = result;

    const greetingString = `${greeting} Meu nome é ${name} e`
      + ` minha comida favorita é ${favoriteFood}.`;

    callback(null, greetingString);
  }, 500);
}

// function onResult(error, data) {
//   console.log(data);
//   console.error(error);
// }

// forceFail();
// createPresentationMessage('Xuxa', onResult);

// reset();
// createPresentationMessage('Xuxa', onResult);

module.exports = {
  createPresentationMessage,
  forceFail,
  reset,
};
