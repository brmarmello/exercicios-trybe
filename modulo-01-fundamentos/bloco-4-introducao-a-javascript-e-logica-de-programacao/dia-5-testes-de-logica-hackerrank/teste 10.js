let n = 10;
let soma = 0;
let quadrados = 0;

for (let i = 1; i <= n; i += 1) {
  soma += i;
}
for (let j = 1; j <= n; j += 1) {
  quadrados += Math.pow(j, 2);
}

console.log(soma * soma - quadrados);

return soma * soma - quadrados;
