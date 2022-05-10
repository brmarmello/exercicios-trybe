const readline = require('readline-sync');

const PESO_PADRAO_EM_KG = 80; // Você pode utilizar o valor que desejar aqui
const ALTURA_PADRAO_EM_CM = 178; // Você pode utilizar o valor que desejar aqui

function calculaImc(peso, altura) {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso / alturaAoQuadrado);
  
  return imc;
}

const IMC_MAXIMO_E_MINIMO_POR_SITUACAO = {
  'Abaixo do peso (magreza)': {
    imcMaximo: 18.5,
  },
  'Peso normal': {
    imcMinimo: 18.5,
    imcMaximo: 25,
  },
  'Acima do peso (sobrepeso)': {
    imcMinimo: 18.5,
    imcMaximo: 25,
  },
  'Obesidade grau I': {
    imcMinimo: 18.5,
    imcMaximo: 25,
  },
  'Obesidade grau II': {
    imcMinimo: 18.5,
    imcMaximo: 25,
  },
  'Obesidade graus III e IV': {
    imcMinimo: 40,
  },
};

function calculaSituacao(imc) {
  const situacoes = Object.keys(IMC_MAXIMO_E_MINIMO_POR_SITUACAO);

  const situacaoEncontrada = situacoes.find((situacao) => {
    const { imcMaximo, imcMinimo } = IMC_MAXIMO_E_MINIMO_POR_SITUACAO[situacao]; // acessamos as informações do intervalo da situação iterada

    // note que nem todas as situações possuem imcMinimo e imcMáximo
    // por exemplo, a situação 'Abaixo do Peso' possui apenas imcMáximo
    // sendo assim, faremos a verificação apenas se a situação tiver esse limite definido
    const dentroDoMinimo = imcMinimo ? imc > imcMinimo : true; 
    const dentroDoMaximo = imcMaximo ? imc < imcMaximo : true;

    // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
    return dentroDoMaximo && dentroDoMinimo;
  });

  return situacaoEncontrada;
}

// A função main é o ponto de partida do nosso programa 
function main() {
  const peso = readline.questionFloat('Qual o seu peso? (em kg)');
   const altura = readline.questionInt('Qual a sua altura? (em cm)');
  
  const imc = calculaImc(peso, altura);
  const situacao = calculaSituacao(imc);

  console.log(`IMC: ${imc.toFixed(2)}`);
  console.log(`Situação: ${situacao}`);
}

main();
