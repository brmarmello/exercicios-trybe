// OBJETIVO 1: ENTENDER O QUE É UMA HOF
// OBJETIVO 2: ENTENDER POR QUE UMA HOF É ÚTIL
// OBJETIVO 3: ENTENDER COMO FAZER UMA HOF

let sociedade = [
  'Chaves',
  'Chiquinha',
  'Kiko',
  'Seu Madruga',
  'Bruxa do 71',
  'Seu Barriga',
  'Professor Girafales',
  'Pópis',
  'Nhonho',
  'Godines',
];

/**
 *
 * @param {Array} pessoas
 * @param {Function} condicao
 * @returns
 */
function eliminar(pessoas, condicao) {
  const acumulador = [];

  for (let index = 0; index < pessoas.length; index += 1) {
    const nomeDaPessoa = pessoas[index];
    if (condicao(nomeDaPessoa)) {
      acumulador.push(nomeDaPessoa);
    }
  }

  return acumulador;
}

function condicaoNaoComecaComS(nome) {
  return nome[0] !== 'S';
}

console.log('----------- antes de eliminar com S -----------');
console.table(sociedade);

sociedade = eliminar(sociedade, condicaoNaoComecaComS);

console.log('----------- depois de eliminar com S -----------');
console.table(sociedade);

sociedade = eliminar(sociedade, (nome) => nome[0] !== 'C');

console.log('----------- depois de eliminar com C -----------');
console.table(sociedade);

sociedade = eliminar(sociedade, (nome) => nome[0] !== 'P');

console.log('----------- depois de eliminar com P -----------');
console.table(sociedade);

sociedade = eliminar(sociedade, (nome) => nome.length <= 5);

console.log('----------- depois de eliminar com nome com mais de 5 letras -----------');
console.table(sociedade);

const pessoaDitadora = 'Dona Florinda';
