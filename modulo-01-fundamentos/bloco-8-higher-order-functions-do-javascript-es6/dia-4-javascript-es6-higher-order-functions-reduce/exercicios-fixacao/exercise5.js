// Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha'
]

function containsA() {
  // escreva seu código aqui
  return names.reduce((acumulator, current) =>
    acumulator + current.split('').reduce((acumulator, current) => {
      if (current === 'a' || current === 'A') return acumulator + 1
      return acumulator;
    }, 0), 0);
};
// console.log(containsA());
