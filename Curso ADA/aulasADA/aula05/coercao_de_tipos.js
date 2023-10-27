// Coerção (conversão) de Tipos

// 1 - Coerção Explítica (Manual)

const numero = 10;

console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero);
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number("1231231"));
console.log(parseFloat("23224.234"));
console.log(parseInt("23224.234"));
console.log(Boolean(0));

console.clear();

// 2 - Coerção Implícita (Automática)

console.log(10 + "1");
console.log("10" - 1);
console.log(10 * "3");
console.log(10 - "X");
