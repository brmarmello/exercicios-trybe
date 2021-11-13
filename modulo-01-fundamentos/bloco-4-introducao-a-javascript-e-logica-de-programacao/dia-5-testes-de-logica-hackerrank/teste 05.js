let n = 100;
let soma = 0;
let fib = [1, 2];

for (let i = 2; i <= n; i++) {
  if (i < n) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }
  if (fib[i] > n) {
    fib.pop();
    break;
  }
}
console.log(fib);

fib.forEach(function (elemento) {
  if (elemento % 2 === 0) {
    soma += elemento;
  }
});

console.log(soma);
