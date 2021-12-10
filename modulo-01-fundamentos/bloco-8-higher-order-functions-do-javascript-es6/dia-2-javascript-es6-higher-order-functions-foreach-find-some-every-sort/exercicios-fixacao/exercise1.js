// Estes exercícios praticam os conceitos de Higher Order Functions associados a outros já vistos, como arrow functions , template literals , objetos e temas dos fundamentos. Essa mistura de conceitos é muito importante para seu aprendizado, então use tudo o que sabe para resolver os exercícios!

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892
    },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920
    },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920
    },
    releaseYear: 1965
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890
    },
    releaseYear: 1928
  }
]

// 1. Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find.
function authorBornIn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}
// console.log(authorBornIn1947());

// 2. Retorne o nome do livro de menor nome.
// Dica: use a função forEach.
function smallerName() {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
// console.log(smallerName());

// Solução:
// 1 - Declaramos a variável nameBook sem nenhum valor;
// 2 - Aplica-se a condicional if utilizando operadores lógicos. O primeiro é o not (!) antes de nameBook . Fazemos isso, pois o fato de nameBook não guardar nenhum valor é retornado "undefined" por padrão, consequentemente o JavaScript interpreta ele como um valor "falsy", que se traduz como "false" propriamente. Desta maneira, ao utilizar o operador not (!) antes de nameBook, estamos negando que ele seja falso, ou seja, convertendo-o para "true";
// 3 - Utilizamos o operador or/ou (||) para compor a lógica de que se nameBook retornar "true" ou se o tamanho da string contida na chave name de cada objeto em books for menor que o tamanho de nameBook , nossa função irá guardar o nome desse livro em nameBook ;
// 4 - Na primeira iteração, como nameBook é undefined, ou seja não guarda o nome de nenhum livro, o primeiro nome de livro será guardado em nameBook . A partir da segunda iteração, é feita a comparação e se o nome do livro for menor que o que está guardado em nameBook , este irá tomar seu lugar e assim por diante até a última iteração.

// 3. Encontre o primeiro livro cujo nome possui 26 caracteres.
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin'
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991
}

function getNamedBook() {
  return books.find(book => book.name.length === 26);
}
// console.log(getNamedBook().name);

// 4. Ordene os livros por data de lançamento em ordem decrescente.
const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928
  }
]

function booksOrderedByReleaseYearDesc() {
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}
// console.log(??????)

// 5. Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
const expectedResult = false

function everyoneWasBornOnSecXX() {
  return books.every(
    book => book.author.birthYear > 1900 && book.author.birthYear <= 2000
  );
}
// console.log(??????)

// 6. Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
const expectedResult = true

function someBookWasReleaseOnThe80s() {
  return books.some(
    book => book.releaseYear >= 1980 && book.releaseYear <= 1989
  )
}
// console.log(??????)

// Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
const expectedResult = false

function authorUnique() {
  return books.every(
    book =>
      !books.some(
        bookSome =>
          bookSome.author.birthYear === book.author.birthYear &&
          bookSome.author.name !== book.author.name
      )
  )
}
// console.log(??????)
