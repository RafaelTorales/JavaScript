// Operadores Booleanos

// Igualdade:       == (ou ===)
// Desigualdade:    != (ou !==)
// Maior que:       >
// Maior ou igual:  >=
// Menor que:       <
// Menor ou igual:  <=

const numero = 10;

console.log(numero == 10);
console.log(numero != 20);
console.log(numero > 20);
console.log(numero >= 20);
console.log(numero < 20);
console.log(numero <= 20);

console.log(numero == "10");
console.log(numero === "10");

console.clear();

console.log(numero != "10");
console.log(numero !== "10");

// Conjunções Lógicas

// AND => &&

let idade = 26;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true;

console.log("Posso dirigir?", possoDirigir);

// OR => ||

console.clear();
idade = 40;

const votoFacultativo = idade < 18 || idade >= 70;
console.log("Voto facultativo?", votoFacultativo);

// NOT => !

const estouGostandoDoCurso = false;

console.log(!estouGostandoDoCurso);
