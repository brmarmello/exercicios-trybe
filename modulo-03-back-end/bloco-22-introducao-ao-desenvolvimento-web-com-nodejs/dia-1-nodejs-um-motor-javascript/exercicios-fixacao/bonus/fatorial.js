const readline = require('readline-sync');

function realizaFatoracao(x) {
  // iniciamos com o valor passado por parâmetro
  let fatorial = x;
  
  const primeiroMultiplicador = x - 1;

  // a cada iteração multiplicamos o fatorial pelo próximo número em ordem decrescente
  // até chegar no 1
  for (let index = primeiroMultiplicador; index > 0; index -= 1) {
    fatorial *= index;
  }
  
  return fatorial;
}

function main() {
  const x = readline.questionInt('Informe o valor de x: ');

  if (x <= 0) {
    console.log('Digite um número maior que 0!');
    return;
  }

  console.log(`x: ${x}`);

  const resultado = realizaFatoracao(x);

  console.log(`Resultado: ${resultado}`);
}

main();
