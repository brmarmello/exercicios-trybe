// Quando você está lidando com um ambiente de testes dentro do jest, é importante saber que existem 3 ciclos, sendo possível utilizar cada um deles para ajudar a configurar e realizar seus testes.
// Até esse momento, você viu como realizar os testes utilizando o Jest, que é apenas um dos ciclos possíveis. Vamos entender, a seguir, quais são os outros dois.

// Setup - é o primeiro ciclo. Ele ocorre antes dos testes serem executados. É uma fase inicial que você pode definir algumas configurações.

// Testes - é considerado o segundo ciclo, ou seja, o momento em que ocorrem os testes. O ciclo em que foi trabalhado nos blocos anteriores.

// Teardown - é o terceiro ciclo. Uma fase que ocorre após os testes serem executados.

// Maravilha! Agora que você sabe conceitualmente que existem esses ciclos dentro do ambiente de testes, você irá entender primeiro porque precisamos deles.

// Para entender isso, dê uma olhada nos códigos a seguir:
// cicles.test.js

let cities = [];

const addCity = (city) => {
  cities.push(city);
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};
// Aqui temos a declaração de uma variável cities , que é uma lista de cidades;
// Há duas funções, addCity que adiciona cidades ao array e removeCity que... Pasmem! Remove cidades desse array.
