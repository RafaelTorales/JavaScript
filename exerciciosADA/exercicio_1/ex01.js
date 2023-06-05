const input = require("readline-sync"); //Require para puxar biblioteca

let tempF = Number(
    input.question(
        "Diga uma temperatura em graus Fahrenheit (°F) e irei converter para graus Celsius (°C): "
    )
);

let tempC = (5 * (tempF - 32)) / 9;

console.log("A temperatura em Celsius (°C): ", tempC);
