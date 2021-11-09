let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
/*
for (i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
} 
*/

// Exercício 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
/*
let resultado = 0 ;

for (i=0; i < numbers.length; i+=1) {
  resultado += numbers[i];
}

console.log(resultado);
*/

// Exercício 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
/*
let media = 0;

for (i=0; i < numbers.length; i+=1) {
  media += (numbers[i] / numbers.length);
}

console.log(media);

if (media > 20) {
  console.log("Valor maior que 20.");
} else {
  console.log("Valor menor ou igual a 20.");
}
*/

// ************* HELPPPP ************* Exercício 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
/*
let maiorN = numbers[0]

for (i=0; i < numbers.length; i+=1) {
  
}

console.log();
*/


// ************* HELPPPP ************* Exercício 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
/*
let valImp = [0];

for (i=0; i < numbers.length; i+=1) {
  valImp += (numbers[i] %2 !== 0);
};

console.log(valImp.length);
*/

// ************* HELPPPP ************* Exercício 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;


// Exercício 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
/*
let array = [];

for (i=0; i <= 25; i+=1) {
  array.push(i)
}

console.log(array);

for (i=0; i < array.length; i+=1) {
  console.log(array[i] / 2);
}
*/




