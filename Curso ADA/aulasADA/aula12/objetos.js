// Objetos

// Como criar um objeto em JavaScript?

let pessoa = {
    nome: "Rafael",
    idade: 20,
};

console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa["nome"]);
console.log(pessoa.idade);

console.clear();

// Como adicionar um par chave-valor?

pessoa.altura = 1.65; //Adicionar no objeto
pessoa.nome = "Rafa"; //Substituir no objeto

console.log(pessoa);

console.clear();

// Como remover um par chave-valor?

delete pessoa.altura;

console.log(pessoa);

// Como percorrer?

for (let chave in pessoa) {
    console.log(chave);
}
