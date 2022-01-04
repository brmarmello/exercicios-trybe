const { cities, states, regions } = require('./data');

/*
 * Transforme o array de cidades em um objeto no seguinte formato:
 *
 * const output = {
 *   N: [
 *     { city: 'Manaus', state: 'Amazonas', region: 'Norte' },
 *     { city: 'Manaus', state: 'Amazonas', region: 'Norte' },
 *   ],
 *   NE: [
 *     { city: 'Feira de Santana', state: 'Bahia', region: 'Nordeste' },
 *     { city: 'Feira de Santana', state: 'Bahia', region: 'Nordeste' },
 *     { city: 'Feira de Santana', state: 'Bahia', region: 'Nordeste' },
 *   ],
 *   etc...
 * };
 * cidade
 * { state: 'AM', name: 'Manaus', region: 'N' },
 * estado
 * { short: 'AM', name: 'Amazonas' },
 * regiao
 * { short: 'N', name: 'Norte' },
*/

const funcaoReducer = (acumulador, valorCorrente) => {
  // console.log('valor corrente', valorCorrente);
  if (acumulador[valorCorrente.region] === undefined) {
    acumulador[`${valorCorrente.region}`] = [];
  }
  const objeto = {
    city: valorCorrente.name,
    state: states.find((estado) => estado.short === valorCorrente.state).name,
    region: regions.find((region) => region.short === valorCorrente.region).name,
  };
  acumulador[`${valorCorrente.region}`].push(objeto);
  return acumulador;
};

const arrayEmObjeto = cities.reduce(funcaoReducer, {});

console.log('O objeto final é: ', arrayEmObjeto);
