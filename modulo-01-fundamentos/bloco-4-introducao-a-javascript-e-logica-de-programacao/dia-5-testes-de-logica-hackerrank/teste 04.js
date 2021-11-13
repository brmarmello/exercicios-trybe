let soma = 0;
let roof = 10;

for (let n = 1; n < roof; n += 1) {
  if (n % 3 === 0 || n % 5 === 0) {
    soma += n;
  }
}
console.log(soma);
return soma;
