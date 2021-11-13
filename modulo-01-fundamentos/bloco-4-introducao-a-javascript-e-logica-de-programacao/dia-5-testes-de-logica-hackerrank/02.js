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
 * Complete the 'difference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER x as parameter.
 */

function difference(x) {
  let result = Math.abs(x - 10);
  return result;
}
console.log(difference(15));

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const x = parseInt(readLine().trim(), 10);

  const result = difference(x);

  ws.write(result + "\n");

  ws.end();
}
