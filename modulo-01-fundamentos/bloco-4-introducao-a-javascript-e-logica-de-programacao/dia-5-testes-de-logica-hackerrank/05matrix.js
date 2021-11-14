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
 * Complete the 'even_fibonacci_numbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER roof as parameter.
 */

function even_fibonacci_numbers(roof) {
  // Write your code here
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const roof = parseInt(readLine().trim(), 10)

  const result = even_fibonacci_numbers(roof)

  ws.write(result + '\n')

  ws.end()
}
