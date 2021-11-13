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
 * Complete the 'even_fibonacci_numbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER roof as parameter.
 */

function even_fibonacci_numbers(roof) {
  let n = roof;
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

  fib.forEach(function (elemento) {
    if (elemento % 2 === 0) {
      soma += elemento;
    }
  });
  return soma;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const roof = parseInt(readLine().trim(), 10);

  const result = even_fibonacci_numbers(roof);

  ws.write(result + "\n");

  ws.end();
}
