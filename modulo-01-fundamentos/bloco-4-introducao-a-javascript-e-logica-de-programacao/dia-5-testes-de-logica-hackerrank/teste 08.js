let array = [1, 3, 5, 4, 0, 0, 7, 0, 0, 6];
let novo = [];

for (let i = 0; i < array.length; i += 1) {
  if (array[i] !== 0) {
    novo.push(array[i]);
  }
  if (array[i] === 0) {
    novo.pop();
  }
}
console.log(novo);

let soma = novo.reduce(function (soma, i) {
  return soma + i;
});
console.log(soma);
