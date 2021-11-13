// *********************** Parte I - Objetos e For/In ***********************

// Código usado para solução das questões de 1 à 5.
/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim' // Inserido na questão 2.
};

let info2 = { // Inserido na questão 5
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};
*/


// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: Bem-vinda, Margarida.

//console.log('Bem-vinda, ' + info.personagem + '!');

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
/*{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}*/

//console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
/*personagem
origem
nota
recorrente*/
/*
for (let key in info) {
 console.log(key);
};
*/

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
/*Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim*/
/*
for (let key in info) {
  console.log(info[key]);
};
*/


//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
/*Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!*/

/*
function infos (info, info2) {
  return infos;
};

console.log(info.personagem, 'e', info2.personagem);
console.log(info.origem, 'e', info2.origem);
console.log(info.nota, 'e', info2.nota);

if (info.recorrente = info2.recorrente) {
  console.log(info.recorrente);
};
*/

// Código usado para solução das questões de 6 à .
/*
let leitor = {
  nome: 'Julia', 
  sobrenome: 'Pessoa', 
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos', 
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    { // Adicionado na questão 7.
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editor: 'Rocco',
    },
  ],
};
*/

// 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

/*
for (let key in leitor) {
  console.log ("O livro favorito de " + leitor.nome + ' ' + leitor.sobrenome + ' ' + 'se chama "' + leitor.livrosFavoritos[0].titulo + '"');
};
*/


// 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:


// 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

/*
for (let key in leitor) {
  console.log('"Julia tem ' + leitor.livrosFavoritos.length + ' ' + 'livros favoritos".');
};
*/

// *********************** Parte II - Funções ***********************

