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
 * Complete the 'digits_sum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER number_s as parameter.
 */

function digits_sum(number_s) {
  // Write your code here
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const number_s = parseInt(readLine().trim(), 10);

  const result = digits_sum(number_s);

  ws.write(result + "\n");

  ws.end();
}
