// DESAFIO 1

const dados = require('../dados.json');

console.log(dados.produtos[1].preco);
console.log(dados.usuarios[1].email);
console.log(dados.usuarios[0].nome);
console.log("Produtos:", dados.produtos);
console.log("Usuários:", dados.usuarios);


// DESAFIO 2

const dados = require('../dados.json')

console.log(dados);

// DESAFIO 3

const produto = {
    id: 1,
    nome: 'camiseta',
    preco: 25.99
}

const produtoString = JSON.stringify(produto)

console.log(produto);
console.log(produtoString)

// DESAFIO 4

const dadosAnimais = require('../animais.json')

const animaisArray = JSON.stringify(dadosAnimais)

const animaisJson = JSON.parse(animaisArray)

console.log(animaisArray);
console.log(animaisJson);

dadosAnimais.animais.push({
    id: 4,
    nome: 'cat',
    habitat: 'myHouse'
})

dadosAnimais.animais[0].habitat = 'rua'

delete dadosAnimais.animais[0]

const objetoString = JSON.stringify(dadosAnimais)


console.log(objetoString);


// manipulacaoJson.js
const objetoAnimais = {
    "animais": [
        {
            "id": 1,
            "nome": "Leão",
            "tipo": "Mamífero",
            "habitat": "Savana"
        },
        {
            "id": 2,
            "nome": "Pinguim",
            "tipo": "Ave",
            "habitat": "Pólo Sul"
        },
        {
            "id": 3,
            "nome": "Cobra",
            "tipo": "Réptil",
            "habitat": "Floresta Tropical"
        }
    ]
};

// Adiciona um novo animal ao array de animais
const novoAnimal = {
    "id": 4,
    "nome": "Elefante",
    "tipo": "Mamífero",
    "habitat": "Savana"
};
objetoAnimais.animais.push(novoAnimal);

// Modifica o habitat de um animal existente no array de animais
const animalParaModificar = objetoAnimais.animais.find(animal => animal.id === 2);
if (animalParaModificar) {
    animalParaModificar.habitat = "Oceano Antártico";
}

// Remove um animal do array de animais
const indiceAnimalRemover = objetoAnimais.animais.findIndex(animal => animal.id === 1);
if (indiceAnimalRemover !== -1) {
    objetoAnimais.animais.splice(indiceAnimalRemover, 1);
}

// Converte o objeto modificado para uma string JSON
const novaStringJsonAnimais = JSON.stringify(objetoAnimais, null, 2);

// Imprime no console o objeto JavaScript resultante das operações
console.log("Objeto JavaScript Resultante das Operações:");
console.log(objetoAnimais);


//DESAFIO 5

const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

function novoObjeto (obj) {

    const novaPessoa = JSON.stringify(obj)

    return JSON.parse(novaPessoa)
}

const novaPessoa = novoObjeto(pessoaOriginal)

novaPessoa.nome = "Bob"

console.log(pessoaOriginal);
console.log(novaPessoa);