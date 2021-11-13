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
 * Complete the 'count_down' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER x as parameter.
 */

function count_down(x) {
  let contagem = "";
  for (let i = 0; i < x; i += 1) {
    contagem += x - i + "...";
  }
  contagem += "0!!!";
  return contagem;
}
console.log(count_down(10));

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const x = parseInt(readLine().trim(), 10);

  const result = count_down(x);

  ws.write(result + "\n");

  ws.end();
}
