'use strict'

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin
})

process.stdin.on('end', function () {
  inputString = inputString.split('\n')

  main()
})

function readLine() {
  return inputString[currentLine++]
}

/*
 * Complete the 'sum_square_difference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function sum_square_difference(n) {
  // Write your code here
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const n = parseInt(readLine().trim(), 10)

  const result = sum_square_difference(n)

  ws.write(result + '\n')

  ws.end()
}
