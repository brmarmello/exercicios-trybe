// // Exercício 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; (RESOLVE-SE COM - PELO MENOS - 2 FORMAS).
/*
s1 - Utilizar o array numbers;
s2 - Utilizar estrutura de repetição = for;
s3 - Termo descobrir valor ímpar - ?????????????????????????????????;
s4 - Termo imprima - indica um console.log.
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 6.1 - Forma 1
/*
let valImp = [];
let counter = 0;

for (i=0; i < numbers.length; i+=1) {
    if (numbers[i] % 2 !== 0) {
      counter += 1;
    }
};

console.log(counter);
*/

// 6.2 - Forma 2
/*
let valImp = [];

for (i=0; i < numbers.length; i+=1) {
  if (numbers[i] % 2 !== 0) {
    valImp.push(numbers[i]);
  };
}

console.log(valImp.length);
*/

