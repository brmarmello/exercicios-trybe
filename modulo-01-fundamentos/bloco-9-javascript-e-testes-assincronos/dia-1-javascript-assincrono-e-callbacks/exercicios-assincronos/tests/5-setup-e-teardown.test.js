// cicles.test.js

// let cities = [];

// const addCity = (city) => {
//  cities.push(city);
// };

// const removeCity = (city) => {
//  cities = cities.filter((eachCity) => eachCity !== city);
// };

/*
test('Testa a função addCity', () => {
  expect.assertions(4);
  addCity('Campinas');
  addCity('Goiania');
  addCity('Recife');
  expect(cities).toHaveLength(3);
  expect(cities).toContain('Campinas');
  expect(cities).toContain('Goiania');
  expect(cities).toContain('Recife');
});

test('Testa a função removeCity', () => {
  expect.assertions(4);
  removeCity('Campinas');
  expect(cities).toHaveLength(2);
  expect(cities).not.toContain('Campinas');
  expect(cities).toContain('Goiania');
  expect(cities).toContain('Recife');
});
*/

// Agora você vai realizar dois testes, para saber se essas funções funcionam exatamente como deseja.

// Como você observou, os testes tiveram sucesso, significando que as funções estão funcionando.
// Mas... e se você criar outras funções, que também manipulam os dados das cidades?
// Isso fará com que você tenha que escrever novos testes.
// Portanto, você teria que lembrar de como o array de cidades ficou após o último teste, para poder continuar do ponto onde parou, certo?
// Imagine quanto tempo você perderia se tivesse uma aplicação com dezenas de funções?
// Para lidar com essa questão é que existem os ciclos de setup e teardown .
// Maravilha! Agora que compreendeu porque eles existem, você vai entender como eles são utilizados.

// cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

/*
beforeEach(() => {
  cities = ['Pindamonhangaba'];
});

afterEach(() => {
  cities = [];
});

test('Testa a função addCity utilizando o beforeEach', () => {
  expect.assertions(3);
  addCity('Piraporinha');
  expect(cities).toHaveLength(2);
  expect(cities).toContain('Pindamonhangaba');
  expect(cities).toContain('Piraporinha');
});

test('Testa a função removeCity utilizando o beforeEach', () => {
  expect.assertions(2);
  removeCity('Pindamonhangaba');
  expect(cities).not.toContain('Pindamonhangaba');
  expect(cities).toHaveLength(0);
});
*/

// No código acima, você declarou uma função beforeEach , que roda antes de cada um dos testes, ou seja, não importa quantos testes sejam criados, a função rodará antes de cada um deles, para definir as suas configurações. Como visto antes, este é o ciclo anterior aos testes chamado de setup .
// Nesta fase, é configurado o array para ter sempre o valor ['Pindamonhangaba'] , portanto, em todos os testes realizados, o valor do array será sempre o mesmo.
// Também declaramos uma função afterEach , que roda após cada um dos testes e faz a limpeza dos dados do nosso array depois de cada execução. Além disso, como o próprio nome indica, ela é executada após cada teste no terceiro ciclo dos testes, que é a fase de teardown .
// Geralmente utilizamos esta fase para limpar os valores que foram manipulados durante os testes.

// Agora, se você tem um bloco de describe agrupando os testes, e o beforeEach ou afterEach estiverem dentro desse describe , ele rodará apenas dentro dos testes que estão nesse describe .
// Ou seja, se criarmos um segundo describe , aquele beforeEach e afterEach que estão no primeiro describe não serão rodados antes e/ou depois dos testes do segundo.
// Para visualizar melhor, veja outro exemplo dentro do mesmo contexto.
// cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

describe('Agrupa o primeiro bloco de testes', () => {
  beforeEach(() => {
    cities = ['Pindamonhangaba'];
  });
  
  afterEach(() => {
    cities = [];
  });
  
  test('Testa a função addCity dentro do primeiro bloco de testes', () => {
    expect.assertions(3);
    addCity('Piraporinha');
    expect(cities).toHaveLength(2);
    expect(cities).toContain('Pindamonhangaba');
    expect(cities).toContain('Piraporinha');
  });
  
  test('Testa a função removeCity dentro do primeiro bloco de testes', () => {
    expect.assertions(2);
    removeCity('Pindamonhangaba');
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toHaveLength(0);
  });
});

describe('Agrupa o segundo bloco de testes', () => {
  beforeEach(() => {
    cities = ['Tangamandapio'];
  });
  
  afterEach(() => {
    cities = [];
  });
  
  test('Testa a função addCity dentro do segundo bloco de testes', () => {
    expect.assertions(3);
    expect(cities).toHaveLength(1);
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toContain('Tangamandapio');
  });
  
  test('Testa a função removeCity dentro do segundo bloco de testes', () => {
    expect.assertions(2);
    removeCity('Tangamandapio');
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toHaveLength(0);
  });
});

// Dessa maneira, você pode organizar uma configuração para cada bloco de testes dentro de um describe .
// Uma questão importante é que para facilitar o entendimento, nós utilizamos funções síncronas para entender como utilizar o setup e o teardown , porém elas geralmente são utilizadas em funções assíncronas.
// Ufa, bastante coisa não é mesmo? Aproveite para fazer uma pausa, tomar um café, se alongar e volte para fixar seus conhecimentos!