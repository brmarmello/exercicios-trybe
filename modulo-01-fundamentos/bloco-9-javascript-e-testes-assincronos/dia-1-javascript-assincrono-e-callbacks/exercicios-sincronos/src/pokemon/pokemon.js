/* eslint-disable global-require */

let environment;

function setEnvironmentToTest() {
  environment = 'test';
}

async function mapToPokemonList(pokemonPage) {
  const {
    getPokemonByName,
  } = (environment !== 'test')
    ? require('./data_source/real-data-source')
    : require('./data_source/fake-data-source');

  return Promise.all(
    pokemonPage.results.map(async (pokemon) => {
      const pokemonDetails = await getPokemonByName(pokemon.name);

      return {
        name: pokemon.name,
        image: pokemonDetails.sprites.front_default,
      };
    }),
  );
}

function listPokemon(onSuccess, onError) {
  const {
    getAllPokemon,
  } = (environment !== 'test')
    ? require('./data_source/real-data-source')
    : require('./data_source/fake-data-source');

  getAllPokemon()
    .then((pokemonPage) => mapToPokemonList(pokemonPage))
    .then((result) => onSuccess(result))
    .catch((error) => onError(error));
}

module.exports = {
  listPokemon,
  setEnvironmentToTest,
};
