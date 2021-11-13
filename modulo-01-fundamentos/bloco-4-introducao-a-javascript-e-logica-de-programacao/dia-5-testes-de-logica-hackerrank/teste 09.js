let n = 10;
let numero = n;
let array = [];
let verificador = 0;

for (let i = 1; i <= n; i += 1) {
  array.push(i);
}
console.log(array);

while (verificador < n) {
  verificador = 0;
  for (let h = 0; verificador < n; h++) {
    if (numero % array[h] == 0) {
      verificador++;
    } else {
      break;
    }
  }
  numero += n;
}
console.log(verificador);

numero -= n;

console.log(numero);
