let numeroFornecido = 13195;
let maiorPrimo = 2;

function primo(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

for (let i = 2; i <= numeroFornecido; i += 1) {
  if (primo(i) === true && numeroFornecido % i === 0) {
    maiorPrimo = i;
  }
}

console.log(maiorPrimo);
