const readline = require('readline-sync');

function calculaVelocidadeMed(distancia, tempo) {
  const velocidadeMedia = (distancia / tempo);

  return velocidadeMedia;
}

function main() {
  const distancia = readline.questionInt('Distância percorrida (m): ');
  const tempo = readline.questionInt('Tempo gasto (s): ');

  const velocidadeMed = calculaVelocidadeMed(distancia, tempo);

  console.log(`Velocidade média: ${velocidadeMed.toFixed(2)} m/s`);
}

main();
