// Exercício 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o; (RESOLVE-SE COM "FOR" OU "FOR OF").
/*
s1 - Utilizar o array numbers;
s2 - Utilizar estrutura de repetição = for;
s3 - Termo descobrir menor valor - ?????????????????????????????????;
s4 - Termo imprima o valor final - indica um console.log.
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 7.1 - UTILIZANDO O "FOR"
/*
let menorN = numbers[0];

for (i=1; i < numbers.length; i += 1) {
  if (numbers[i] < menorN) {
    menorN = numbers[i];
  }
}

console.log(menorN);
*/


// 7.2 - UTILIZANDO O "FOR OF"

let menorN = numbers[0];

for (const num of numbers) {
  if (num < menorN) {
    menorN = num;
  };
};

console.log(menorN);
