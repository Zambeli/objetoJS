// DESAFIO 1

const pessoa = {
    nome: 'Mariana',
    idade: 28,
    solteira: true,
    hobbies: ['cozinhar', 'caminhar', 'ler']
}



function mostrarInfoPessoa(pessoa) {
    console.log(`${pessoa.nome} com o tipo de objeto ${typeof pessoa.nome}`)
    console.log(`${pessoa.idade} com o tipo de objeto ${typeof pessoa.idade}`)
    console.log(`${pessoa.solteira} com o tipo de objeto ${typeof pessoa.solteira}`)
    console.log(`${pessoa.hobbies} com o tipo de objeto ${typeof pessoa.hobbies}`)
}

console.log(mostrarInfoPessoa(pessoa));


// DESAFIO 2

const pessoa = {
    nome: 'Mariana',
    idade: 28,
    solteira: true,
    hobbies: ['cozinhar', 'caminhar', 'ler'],
    endereco: { 
        rua: 'Rua das Flores',
        cidade: 'Rio de Janeiro',
        estado: 'RJ'
    }
}

function mostrarInfoPessoa(pessoa) {
    console.log(`${pessoa.nome} com o tipo de objeto ${typeof pessoa.nome}`)
    console.log(`${pessoa.idade} com o tipo de objeto ${typeof pessoa.idade}`)
    console.log(`${pessoa.solteira} com o tipo de objeto ${typeof pessoa.solteira}`)
    console.log(`${pessoa.hobbies} com o tipo de objeto ${typeof pessoa.hobbies}`)
    console.log(`${pessoa.endereco.rua} com o tipo de objeto ${typeof pessoa.endereco.rua}`)
    console.log(`${pessoa.endereco.cidade} com o tipo de objeto ${typeof pessoa.endereco.cidade}`)
    console.log(`${pessoa.endereco.estado} com o tipo de objeto ${typeof pessoa.endereco.estado}`)
}

console.log(mostrarInfoPessoa(pessoa));

// DESAFIO 3

const pessoas = [{
    nome: 'Mariana',
    idade: 28,
    cidade: 'Rio de Janeiro'
}, {
    nome: 'William',
    idade: 25,
    cidade: 'Rio de Janeiro'
}, {
    nome: 'John',
    idade: 22,
    cidade: 'Rio de Janeiro'
}]

function mostrarListaPessoas (pessoas) {
    console.log(pessoas)
    pessoas.forEach(pessoa => {
        console.log(`a pessoa com o nome ${pessoa.nome} tem ${pessoa.idade} anos e sua cidade é ${pessoa.cidade}`)
    });
}

pessoas.push( {
    nome: 'Gustavo',
    idade: 22,
    cidade: 'Brasil'

})

// mostrarListaPessoas(pessoas)

function filtrarPorCidade (pessoas, cidade) {
    const pessoaFiltrada = pessoas.filter(pessoa => {
        return pessoa.cidade == cidade
    })

    return pessoaFiltrada
}

console.log(filtrarPorCidade(pessoas, 'Rio de Janeiro'))



// DESAFIO 4

const medias = [7,9,7,3]

const calculadora = {
    soma: function (num1,num2) {
        return num1 + num2
    },
    subtracao: function (num1,num2) {
        return num2 - num1
    },
    multiplicacao: function (num1, num2) {
        return num1 * num2
    },
    divisao: function (num1, num2) {
        if (num2 !== 0) {
            return num1 / num2
        } else {
            return "Divisão por zero não é permitido"
        }
    },
    calcularMedia: function (array) {
        const somaMedia = array.reduce((acum,media) =>  acum + media,0)
        return somaMedia / array.length
    }
}


console.log(calculadora.soma(1,4))
console.log(calculadora.subtracao(1,4))
console.log(calculadora.multiplicacao(1,4))
console.log(calculadora.divisao(1,0))
console.log(calculadora.calcularMedia(medias))


// DESAFIO 5

const contaBancaria = {
    titular:'gusta',
    saldo: 1546,
    depositar: function (valor) {
        this.saldo += valor
    },
    sacar: function (valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor
        } else {
            console.log("Saldo indisponivel para saque")
        }
    }
}

const cliente = {
    nome: 'jorge',
    conta: contaBancaria
}

function mostrarSaldo (cliente) {
    console.log(cliente.nome)
    console.log(cliente.conta.saldo);
}


contaBancaria.depositar(51)
contaBancaria.sacar(100)



mostrarSaldo(cliente)