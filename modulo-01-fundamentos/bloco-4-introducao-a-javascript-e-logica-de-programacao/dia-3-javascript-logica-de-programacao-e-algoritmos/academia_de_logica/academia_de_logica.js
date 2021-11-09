// 01 - Mensagem codificada 
// Elabore uma função que ao receber uma string como parâmetro retorne outra string com a posição de cada caractere
// multiplicado por 3 no lugar do caractere. Exemplo: decodeString("Trybe") retorna "036912"

let string = "Trybe";
let newString = '';
for (let index = 0; index < string.length; index += 1) {
  let x = 3 * index;
  // newString = newString.concat(x);
  // newString += x;
  newString = newString + x;
}
console.log('newString1', newString);


// 02 - Calcular a soma de 1 até 1000
// Faça um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 1000 é: X.

let resultado = 0;

for (let i = 1; i <= 1000; i += 1) {
  resultado += i;
}
console.log(resultado);

// 03 - Escreva seu nome N vezes
// Faça um algoritmo usando a estrutura "FOR" que escreva 20 vezes seu nome no terminal.

let meuNome = 'andre';

for (let index = 0; index < 20; index += 1) {
  console.log(meuNome)
}

// 04 - Números divisíveis por 3
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let soma = 0;
for (let index = 2; index <= 150; index += 1) {
  if (index % 3 == 0) {
    soma += 1;
  }
  if (soma == 50) {
    console.log('a soma dos numeros é 50')
  }  
}
console.log(soma);

// 05 - Imprima os números ímpares
//A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
//Crie um algoritmo que exibe todos os números inteiros ímpares desse intervalo.

for (let index = 1; index <= 50; index += 1){
  if((index % 2) != 0){
    console.log(index)
  }
}

// 06 - Ordem decrescente
// Escreva um algoritmo que imprima os números inteiros do intervalo de 100 a 200 em ordem decrescente.

for(let count = 200; count >= 100; count = count - 1){
  console.log(count);
}