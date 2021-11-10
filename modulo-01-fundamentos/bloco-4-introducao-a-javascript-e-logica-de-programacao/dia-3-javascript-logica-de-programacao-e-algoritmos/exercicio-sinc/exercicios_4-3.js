/* EXERCÍCIO 1- Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
1 pão com um monte de recheio!!!

n = 5

*****
*****
*****
*****
*****
*/
/*
let n = 5;
let asterisco = '*';
let espVazio = ''; // Quantidade de * impresso em uma linha!

// Cada for desse imprime 5 colunas
for (let i = 0; i < n; i += 1) {
  espVazio = espVazio + asterisco;
};

// Cada for desse imprime 5 linhas
for (let i = 0; i < n; i += 1) {
  console.log(espVazio);
};
*/

/*
for (let i = 0; i < n; i += 1) {
  espVazio += '*' // espVazio = espVazio + '*'
};
for (let i = 0; i < n; i += 1) {
  console.log(espVazio);
};
*/

/*
const n = 5;

for (let i = 0; i < n; i += 1) {
  let num = '';
  for (let i1 = 0; i1 < n; i1 += 1) {
    num += '*';
  }
  console.log(num);
}
*/


/* EXERCÍCIO 2- Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

n = 5

*
**
***
****
*****
*/

/*
let n = 5

for (let i = 1; i <= n; i += 1) {
  let triangulo = '';
  for (let j = 1; j <= i; j += 1) {
    triangulo += '*';
  };
  console.log(triangulo);
}
*/


/* EXERCÍCIO 3- Agora inverta o lado do triângulo. Por exemplo:

n = 5
    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
*/

/*
let n = 5;
let asterisco = '*';
let espVazio = '';
let input = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};
*/


/* EXERCÍCIO 4- Depois, faça uma pirâmide com n asteriscos de base:

n = 5

  *
 ***
*****
*/



// Bônus

/* EXERCÍCIO 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******
*/



/* EXERCÍCIO 6 - Faça um programa que diz se um número definido numa variável é primo ou não.

Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.

Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
*/




