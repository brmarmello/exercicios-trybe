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
 * Complete the 'caixa' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY values as parameter.
 */

function caixa(values) {
  let array = values;
  let novo = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== 0) {
      novo.push(array[i]);
    }
    if (array[i] === 0) {
      novo.pop();
    }
  }
  console.log(novo);

  let soma = novo.reduce(function (soma, i) {
    return soma + i;
  });
  return soma;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const valuesCount = parseInt(readLine().trim(), 10);

  let values = [];

  for (let i = 0; i < valuesCount; i++) {
    const valuesItem = parseInt(readLine().trim(), 10);
    values.push(valuesItem);
  }

  const result = caixa(values);

  ws.write(result + "\n");

  ws.end();
}
