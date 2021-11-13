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
 * Complete the 'fahrenheit_to_celsius' function below.
 *
 * The function is expected to return a FLOAT.
 * The function accepts INTEGER temp_fahrenheit as parameter.
 */

function fahrenheit_to_celsius(temp_fahrenheit) {
  let celsius = (temp_fahrenheit - 32) / 1.8;
  return celsius.toFixed(1);
}
console.log(fahrenheit_to_celsius(95));

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const temp_fahrenheit = parseInt(readLine().trim(), 10);

  const result = fahrenheit_to_celsius(temp_fahrenheit);

  ws.write(result + "\n");

  ws.end();
}
