// Exercício 2 - Some todos os valores contidos no array e imprima o resultado;
/*
s1 - Utilizar o array numbers;
s2 - Para poder somar os valores tem que percorrer = estrutura de repetição, ou loop;
s3 - Termo somar todos os valores - mostra que devemos ter uma variável que guarda o resultado da soma dos valores;
s4 - Termo imprima o valor final - indica um console.log.
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0 ;

for (i=0; i < numbers.length; i+=1) {
  resultado += numbers[i];
}

console.log(resultado);



