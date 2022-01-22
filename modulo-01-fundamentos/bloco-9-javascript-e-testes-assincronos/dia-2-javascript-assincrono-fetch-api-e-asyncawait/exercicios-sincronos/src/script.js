function append(data) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.name;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ul.appendChild(li);
}

async function getPokemonByName(pokemonName) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const resposta = await fetch(url);
  const dados = await resposta.json();

  const pokemon = {
    name: dados.name,
    imageUrl: dados.sprites.front_default,
  };

  return pokemon;
}

async function listarPokemon() {
  try {
    // A linha abaixo vai causar uma exceção
    // append(await getPokemonByName('pikachuu'));

    append(await getPokemonByName('squirtle'));
    append(await getPokemonByName('jigglypuff'));
    append(await getPokemonByName('snorlax'));
  } catch (error) {
    console.error(error);
    alert('Ops! Deu algum erro.');
  }
}

window.onload = listarPokemon;
