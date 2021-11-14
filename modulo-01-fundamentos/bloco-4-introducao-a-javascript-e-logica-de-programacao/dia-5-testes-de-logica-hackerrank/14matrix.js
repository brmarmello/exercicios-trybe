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
 * Complete the 'largest_palindrome_product' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER digits as parameter.
 */

function largest_palindrome_product(digits) {
  // Write your code here
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const digits = parseInt(readLine().trim(), 10);

  const result = largest_palindrome_product(digits);

  ws.write(result + "\n");

  ws.end();
}
