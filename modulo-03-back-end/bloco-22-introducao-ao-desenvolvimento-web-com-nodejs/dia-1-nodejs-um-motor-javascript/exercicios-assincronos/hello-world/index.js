// Perceba que, apesar do pacote chamar-se readline-sync, podemos dar qualquer nome para a const que usamos para importá-lo.
const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Hello, ${name}! You are ${age} years old!`);