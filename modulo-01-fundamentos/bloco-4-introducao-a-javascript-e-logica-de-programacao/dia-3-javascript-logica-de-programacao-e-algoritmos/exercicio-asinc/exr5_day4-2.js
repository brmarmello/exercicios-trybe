// Exercício 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o; (RESOLVE-SE COM "FOR" OU "FOR OF").
/*
s1 - Utilizar o array numbers;
s2 - Utilizar estrutura de repetição = for;
s3 - Termo descobrir maior valor - ?????????????????????????????????;
s4 - Termo imprima o valor final - indica um console.log.
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 5.1 - UTILIZANDO O "FOR"
/*
let maiorN = 0;

for (i=1; i < numbers.length; i+=1) {
  if (numbers[i] > maiorN) {
    maiorN = numbers[i];
  }
}

console.log(maiorN);
*/

// 5.2 - UTILIZANDO O "FOR OF"

let maiorN = 0;

for (const num of numbers) {
  if (num > maiorN) {
    maiorN = num;
  }
}

console.log(maiorN);
