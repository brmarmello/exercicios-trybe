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
 * Complete the 'nth_prime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function nth_prime(n) {
  let contador = 0;
  let enesimo = 0;

  function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
      if (num % i == 0) return false;
    }
    return true;
  }

  for (let i = 0; i < Infinity; i++) {
    if (isPrime(i) === true) {
      contador++;
      enesimo = i;
    }
    if (contador === n) {
      break;
    }
  }
  return enesimo;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const result = nth_prime(n);

  ws.write(result + "\n");

  ws.end();
}
