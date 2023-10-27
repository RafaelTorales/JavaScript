// Laços Numéricos (For)

const input = require("readline-sync");

// O problema

// let nota1 = Number(input.question("Informe a nota 1: "));
// let nota2 = Number(input.question("Informe a nota 2: "));
// let nota3 = Number(input.question("Informe a nota 3: "));
// let media = (nota1 + nota2 + nota3) / 3;

// Acumulador

let acumulador = 0;

acumulador += 10;

acumulador -= 2;

acumulador++;

console.log(acumulador);
console.clear();

// Estrutura for

for (let i = 10; i <= 12; i++) {
    console.log("Repetição", i);
}

for (let i = 12; i > 8; i--) {
    console.log("Repetição", i);
}

console.clear();

// Resolvendo o problema inicial

let nota;
let soma = 0;

for (let i = 1; i < 4; i++) {
    nota = Number(input.question(`Informe a nota ${i} do aluno: `));
    soma += nota;
}

console.log(`a média do aluno é ${soma / 3}`);
