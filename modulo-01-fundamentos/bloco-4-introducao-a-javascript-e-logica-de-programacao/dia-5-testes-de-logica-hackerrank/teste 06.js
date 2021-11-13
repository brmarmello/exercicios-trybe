let n = 10;
let contador = 0;
let enesimo = 0;

function primo(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

for (let i = 0; i < Infinity; i++) {
  if (primo(i) === true) {
    contador++;
    enesimo = i;
  }
  if (contador === n) {
    break;
  }
}
console.log(contador);
console.log(enesimo);
