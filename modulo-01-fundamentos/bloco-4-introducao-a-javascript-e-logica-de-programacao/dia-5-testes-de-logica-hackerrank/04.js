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
 * Complete the 'multiples_of_3_or_5' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER roof as parameter.
 */

function multiples_of_3_or_5(roof) {
  let soma = 0;
  for (let n = 1; n < roof; n += 1) {
    if (n % 3 === 0 || n % 5 === 0) {
      soma += n;
    }
  }
  return soma;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const roof = parseInt(readLine().trim(), 10);

  const result = multiples_of_3_or_5(roof);

  ws.write(result + "\n");

  ws.end();
}
