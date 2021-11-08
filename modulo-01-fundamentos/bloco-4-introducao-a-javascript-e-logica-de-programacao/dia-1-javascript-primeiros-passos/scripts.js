/*
const a = 10;
const b = 5;
const c = 20;
*/

/*
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
*/
//OU
/*
console.log('Adição: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));
*/

/*
if (a > b) {
  console.log("A é maior do que B");
} else {
  console.log("B é maior do que A");
}
*/

/*
if (a > b && a > c) {
  console.log("A é o maior dos 3 números.");
}else if (b > a && b > c) {
  console.log("B é o maior dos 3 números.");
} else {
  console.log("C é o maior dos 3 números.");
}
*/

/*
if (a > 0) {
  console.log("A é positivo.");
}else if (a < 0) {
  console.log("A é netativo.");
} else {
  console.log(0);
}
*/


// Meu código:

/*
const angA = 60;
const angB = 100;
const angC = 20;



if (angA > 0 && angB > 0 && angC > 0) {
  if (angA + angB + angC === 180) {
    console.log(true);
  } else {
  console.log(false);
  };
} else {
  console.log("Erro: ângulo inválido!");
}
*/

// Gabarito!

/*
let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}
*/

// --------------------------------- exr 6 INI ---------------------------------

/*
const rei = 'Andar uma casa a frente.'
switch (rei)


const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};
*/

// --------------------------------- exr 6 FIM ---------------------------------

/*
const nota = 61;

if (nota < 0 || nota > 100) {
    console.log("Erro! Nota inválida... Sua nota deve ser entre 0 e 100.")
} else if (nota >= 90) {
    console.log("Seu conceito foi 'A'");
} else if (nota >= 80) {
    console.log("Seu conceito foi 'B'");
}  else if (nota >= 70) {
    console.log("Seu conceito foi 'C'");
} else if (nota >= 60) {
    console.log("Seu conceito foi 'D'");
} else if (nota >= 50) {
    console.log("Seu conceito foi 'E");
} else {
    console.log("Seu conceito foi 'E");
}
*/

/*
const num1 = 32;
const num2 = 51;
const num3 = 147;

let returnNum = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  returnNum = true;
}
console.log(returnNum)
*/

/*
const num1 = 32;
const num2 = 52;
const num3 = 147;

let returnNum = false;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
  returnNum = true;
}
console.log(returnNum);
*/

/*
let pCusto = 100.00;
const custoTotal = pCusto * 0.2;
let pVenda = 150.00;
const lucro = pVenda - custoTotal;
const lucroTotal = lucro * 1000;

if (pCusto > 0 && pVenda > 0) {
  console.log(lucroTotal);
} else {
  console.log("Erro ao tentar calcular o valor informado.")
}
*/




/*
let salBruto = 3000.00;
const inss8 = 0.08;
const inss9 = 0.09;
const inss11 = 0.11;
const inssTeto = 570.88;

const salSemInss = salBruto - (salBruto * inss11);
*/

/*
let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));
*/
