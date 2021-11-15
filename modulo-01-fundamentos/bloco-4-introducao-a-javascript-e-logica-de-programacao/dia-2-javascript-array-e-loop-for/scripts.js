// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7 + BONUS 1, BONUS 2 e BONUS 3:
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


// Exercício 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
/*
let media = 0;

for (i=0; i < numbers.length; i+=1) {
  media += (numbers[i] / numbers.length);
}

console.log(media);


// Exercício 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20) {
  console.log("Valor maior que 20.");
} else {
  console.log("Valor menor ou igual a 20.");
}
*/


// Exercício 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o; (RESOLVE-SE COM "FOR" OU "FOR OF").
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
/*
let maiorN = 0;

for (const num of numbers) {
  if (num > maiorN) {
    maiorN = num;
  }
}

console.log(maiorN);
*/


// Exercício 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
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


// Exercício 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
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
/*
let menorN = numbers[0];

for (const num of numbers) {
  if (num < menorN) {
    menorN = num;
  };
};

console.log(menorN);
*/


// Exercício 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
/*
let array = [];

for (i=0; i <= 25; i+=1) {
  array.push(i)
}

console.log(array);
*/


//Exercício  9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
/*
for (i=0; i < array.length; i+=1) {
  console.log(array[i] / 2);
}
*/


//--------------------------------------------------------------------------------------


// BONUS!
// http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort
// https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a

// Para ordenar os elementos em ordem alfabética crescente, use o método sort() sem passar a função de comparação.
/*
let animais = ['Gato', 'Cachorro', 'Papagaio', 'Leão']
animais.sort(); // Escreve-se desta forma porque o array é de STRINGS!
console.log(animais);
*/

//---------------

// Para classificar o array animals em ordem alfabética decrescente, é necessário altera a lógica da função de comparação e passá-la para o método sort().
/*
animais.sort((a, b) => {
  if (a > b)
    return -1;
  if (a < b)
    return 1;
  return 0;
});
console.log(animais);
*/

//---------------

// Supondo que o array tenha elementos em letras maiúsculas e minúsculas, em ordem alfabética, é preciso usar uma "função de comparação personalizada" para converter todos os elementos para o mesmo tipo de letra, maiúscula ou minúscula e passar essa função para o método sort().
/*
let animais = ['gato', 'Cachorro', 'papagaio', 'Leão']
animais.sort(function (a, b) {
  let x = a.toUpperCase(),
      y = b.toUpperCase();
  return x === y ? 0 : x > y ? 1 : -1;
});
console.log(animais);
*/

//---------------

// para as strings com caracteres não ASCII, como è ou é, o método shot() não funcionará corretamente. Para resolver isso, use o método localeCompare() do objeto String para comparar sequencias de caracteres em uma localidade específica, assim:
/*
let acento = ['abeille', 'chat', 'zèbre', 'écureuil'];
acento.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(acento);
*/

//---------------

/*
// ORDENANDO UM ARRAY DE OBJETOS POR UMA "PROPRIEDADE ESPECÍFICA":
// A seguir é apresentado um array de objetos de employee em que cada objeto contém 3 propriedades: name, salary e hireDate.
let employee = [{name: 'John', salary: 90000, hireDate: 'July 1, 2010'}, {name: 'David', salary: 75000, hireDate: 'August 15, 2009'}, {name: 'Ana', salary: 80000, hireDate: 'December 12, 2011'}];
// ORDENANDO OBJETOS POR UMA "PROPRIEDADE NUMÉRICA". - Ordenar os funcionários por valor de salário em ordem crescente. - Este exemplo é semelhante ao exemplo de ordenação de um array de números em ordem crescente. A diferença é que ele compara a propriedade salary de dois objetos.
employee.sort(function (x, y) {
  return x.salary - y.salary;
});
console.table(employee);
// ORDENANDO OBJETOS POR UMA "PROPRIEDADE STRING". - Para ordenar o array de employees pela propriedade name, sem distinção entre letras maiúsculas e minúsculas, você passa a função de comparação transformando todas as letras das strings em maiúsculas antes de efetuar a comparação, da seguinte forma:
employee.sort(function (x, y) {
  let a = x.name.toUpperCase(),
      b = y.name.toUpperCase();
  return a === b ? 0 : a > b ? 1 : -1;
});
console.table(employee);
// ORDENANDO OBJETOS POR UMA "PROPRIEDADE DATE". - Suponha que você queira ordenar os funcionários com base na data de contratação. Os dados da data de contratação de cada funcionário estão armazenados na propriedade hireDate, porém é apenas uma string que representa uma data, não é exatamente um objeto Date. Portanto, para ordenar os funcionários por data de contratação, primeiro é necessário criar um objeto Date válido a partir da string hireDate e só então comparar as datas, da mesma forma que comparamos números.
employee.sort(function (x, y) {
  let a = new Date(x.hireDate),
      b = new Date(y.hireDate);
  return a - b;
});
console.table(employee);
*/

//---------------

// BONUS 1 - Ordene o array numbers em ordem crescente e imprima seus valores;
/*
numbers.sort((a, b) => a - b); // Escreve-se desta forma (com função de comparação) porque o array é de NÚMEROS!
console.log(numbers);
*/


// BONUS 2 - Ordene o array numbers em ordem decrescente e imprima seus valores;
/*
numbers.sort((a, b) => b - a); // Escreve-se desta forma (com função de comparação) porque o array é de NÚMEROS!
console.log(numbers);
*/


// BONUS 3 - Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push:
/*
let newArray = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (i + 1 < numbers.length) {
    newArray.push(numbers[i] * numbers[i + 1]);
  } else {
    newArray.push(numbers[i] * 2);
  }
}
console.log(newArray);
*/


//--------------------------------------------------------------------------------------


// Diferença entre a estrutura do "for" e do "for/of".
/*
--->>> FOR <<<---
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

--->>> FOR/OF <<<--- DE USO EXCLUSIVO EM ARRAYS!!!
for(let numero of numbers) {
  console.log(numero);
}

--->>> FOR/IN <<<--- DE USO EM ARRAYS(retorna os índices do array, não seu conteúdo) E USO EM OBJETOS!!!

--->>> Soma um valor a cada elemento do array e retorna-os <<<---
for (let sum of numbers) {
  sum += 1;
  console.log(sum);
}
*/


