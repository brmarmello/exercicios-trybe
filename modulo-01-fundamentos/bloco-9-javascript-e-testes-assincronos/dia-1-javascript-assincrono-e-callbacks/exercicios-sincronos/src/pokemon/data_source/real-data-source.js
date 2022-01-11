const fetch = require('node-fetch');

const baseUrl = 'https://pokeapi.co/api/v2/';

async function getAllPokemon(limit = 5) {
  const response = await fetch(`${baseUrl}pokemon?limit=${limit}`);
  return response.json();
}

async function getPokemonByName(name) {
  const response = await fetch(`${baseUrl}pokemon/${name}`);
  return response.json();
}

module.exports = {
  getAllPokemon,
  getPokemonByName,
};
