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
 * Complete the 'largest_prime_factor' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER number as parameter.
 */

function largest_prime_factor(number) {
  let numeroFornecido = number;
  let maiorPrimo = 2;

  function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
      if (num % i == 0) return false;
    }
    return true;
  }

  for (let i = 2; i <= numeroFornecido; i += 1) {
    if (isPrime(i) === true && numeroFornecido % i === 0) {
      maiorPrimo = i;
    }
  }
  return maiorPrimo;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const number = parseInt(readLine().trim(), 10);

  const result = largest_prime_factor(number);

  ws.write(result + "\n");

  ws.end();
}
