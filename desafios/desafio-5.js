// DESAFIO 1

const biblioteca = [
    {id: 1, titulo: "o Hobbit", autor: "J.R.R. Tolkien", anoDePublicaçao: 1937},
    {id: 2, titulo: "A Sociedade do Anel", autor: "J.R.R. Tolkien", anoDePublicaçao: 1999},
    {id: 3, titulo: "O Retorno do Rei", autor: "J.R.R. Tolkien", anoDePublicaçao: 2003}
]

function encontrarLivroPorId (id) {
    const livroEncontrado = biblioteca.find(livro => livro.id === id)
    if (livroEncontrado) {
        return livroEncontrado
    } else {
        return "Livro não encontrado"
    }
}

console.log(encontrarLivroPorId(2))

// DESAFIO 2

const catalogoDeFilmes = [
    {id: 1, nome: "O Hobbit", diretor: "J.R.R. Tolkien", anoLancamento: 1937 },
    {id: 2, nome: "A Sociedade do Anel", diretor: "J.R.R. Tolkien", anoLancamento: 1999 },
    {id: 3, nome: "O Retorno do Rei", diretor: "J.R.R. Tolkien", anoLancamento: 2003 },
    {id: 4, nome: "O Senhor dos Anéis", diretor: "J.R.R. Tolkien", anoLancamento: 2001 },
]

function filtrarFilmesPorAno (ano) {
    return catalogoDeFilmes.filter(filme => filme.anoLancamento === ano)
}

console.log(filtrarFilmesPorAno(2003))

// DESAFIO 3

const listaDeProdutos = [
    {id:1, nome: 'feijao', preco: 30},
    {id:2, nome: 'arroz', preco: 20},
    {id:3, nome: 'carne', preco: 10},
    {id:4, nome: 'oleo', preco: 40},
    {id:5, nome: 'manteiga', preco: 5}
]

function filtrarProdutosPorPreco (valorMax) {
    const produtosFiltrados = listaDeProdutos.filter(produto => produto.preco <= valorMax)
    return produtosFiltrados.sort((a,b) => a.preco - b.preco)
}

console.log(filtrarProdutosPorPreco(30));

// DESAFIO 4

ordenarAnimais.js

// Array de objetos representando animais
const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
];

// Função para ordenar animais com base na função de comparação fornecida
function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}

// Função de comparação para ordenar por idade de forma crescente
function compararIdadeCrescente(a, b) {
    return a.idade - b.idade;
}

// Ordena os animais por idade de forma crescente e imprime no console
const animaisOrdenadosCrescente = ordenarAnimais(compararIdadeCrescente);
console.log("Animais Ordenados por Idade (Crescente):");
console.log(animaisOrdenadosCrescente);

// Função de comparação para ordenar por idade de forma decrescente
function compararIdadeDecrescente(a, b) {
    return b.idade - a.idade;
}

// Ordena os animais por idade de forma decrescente e imprime no console
const animaisOrdenadosDecrescente = ordenarAnimais(compararIdadeDecrescente);
console.log("\nAnimais Ordenados por Idade (Decrescente):");
console.log(animaisOrdenadosDecrescente);


//DESAFIO 5

const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

function encontrarFuncionarioPorId(id) {
    for (const departamento of departamentos) {
        const funcionarioEncontrado = departamento.funcionarios.find(funcionario => funcionario.id === id);
        if (funcionarioEncontrado) {
            return funcionarioEncontrado;
        }
    }
    return null;
}

console.log(encontrarFuncionarioPorId(201))
