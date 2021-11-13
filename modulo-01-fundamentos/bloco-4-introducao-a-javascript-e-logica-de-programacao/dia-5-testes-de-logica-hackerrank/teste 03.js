let contagem = "";
let x = 10;

for (let i = 0; i < x; i += 1) {
  contagem = contagem + (x - i) + "...";
}
contagem += "0!!!";

console.log(contagem);
