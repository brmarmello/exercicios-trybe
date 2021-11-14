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
 * Complete the 'poligrama' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING word as parameter.
 */

function poligrama(word) {
  // Write your code here
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const word = readLine();

  const result = poligrama(word);

  ws.write(result + "\n");

  ws.end();
}
