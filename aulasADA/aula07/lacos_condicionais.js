// Estruturas de Repetição e Laços Condicionais

const input = require("readline-sync"); //Require para puxar biblioteca

let numeroSorteado = Math.floor(Math.random() * 10); //Sortea um numero de 0 a 10

let numero = Number(input.question("Qual numero voce escolhe? ")); //Question para fazer uma pergunta para o usuário
let cont = 1;

while (numero !== numeroSorteado) {
    cont++;
    console.log("Você errou! Tente novamente");
    numero = Number(input.question("Qual numero voce escolhe? "));
}

console.log(`Você acertou em ${cont} tentativas! Parabéns`);
