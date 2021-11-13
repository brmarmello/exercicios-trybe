"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'smallest_multiple' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER roof as parameter.
 */

function smallest_multiple(roof) {
  let n = roof;
  let numero = n;
  let array = [];
  let verificador = 0;

  for (let i = 1; i <= n; i += 1) {
    array.push(i);
  }

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
  numero -= n;
  return numero;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const roof = parseInt(readLine().trim(), 10);

  const result = smallest_multiple(roof);

  ws.write(result + "\n");

  ws.end();
}
