// Exercício 3 - Calcule e imprima a média aritmética dos valores contidos no array;
/*
s1 - Utilizar o array numbers;
s2 - Para poder somar os valores tem que percorrer = estrutura de repetição, ou loop;
s3 - Para poder calcular a média aritimética pega o valor da soma e divide pela quantidade de índices do array = array.length;
s4 - Termo imprima o valor final - indica um console.log.
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let media = 0;

for (i=0; i < numbers.length; i+=1) {
  media += (numbers[i] / numbers.length);
}

console.log(media);

// Exercício 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
/*
s1 - O termo " caso " = indica uma estrutura condicional, ou if ;
s2 - Termo imprima mensagem - indica um console.log.
*/

if (media > 20) {
  console.log("Valor maior que 20.");
} else {
  console.log("Valor menor ou igual a 20.");
}
