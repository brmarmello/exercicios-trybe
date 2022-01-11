const { listPokemon, setEnvironmentToTest } = require('./pokemon');
const { forceFail, reset } = require('./data_source/fake-data-source');

setEnvironmentToTest();
forceFail();

listPokemon(
  (data) => console.log(data),
  (error) => console.error(error),
);

reset();

listPokemon(
  (data) => console.log(data),
  (error) => console.error(error),
);
