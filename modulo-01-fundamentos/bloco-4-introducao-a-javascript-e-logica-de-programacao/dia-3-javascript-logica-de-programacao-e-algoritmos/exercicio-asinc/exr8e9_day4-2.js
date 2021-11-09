// Exercício 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

/*
s1 - Criar o array com os valores detrerminados - Termo criar = Inserir valor no arraY = .push;
s2 - Utilizar estrutura de repetição = for.
*/

let array = [];

for (i=1; i <= 25; i+=1) {
  array.push(i)
}

console.log(array);

//Exercício  9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
/*
s1 - Termo imprima o valor final - indica um console.log.
s2 - Termo cada um dos elementos - indica estrutura de repetição = for.
*/

for (i=0; i < array.length; i+=1) {
  console.log(array[i] / 2);
}
