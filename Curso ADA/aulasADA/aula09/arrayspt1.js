// Arrays

// Como criar um array?

let arr = ["Rafael", 20, 1.65, true];

console.log(arr);
console.clear();
// Como acessar os elementos do array

console.log("Primeiro elementos: ", arr[0]);
console.log("Segundo elementos: ", arr[1]);
console.log("Terceiro elementos: ", arr[2]);
console.log("Quarto elementos: ", arr[3]);

// Como obter o tamanho do array

console.log("Tamanho array: ", arr.length);

console.clear();
// Percorrendo arrays

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.clear();

for (let elemento of arr) {
    console.log(elemento);
}

console.clear();

for (let indice in arr) {
    console.log(indice, arr[indice]);
}
