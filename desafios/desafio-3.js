    // DESAFIO 1

const pessoa = {
    nome: 'gustavo',
    notas: [5,7,7,9,10],
    calcularMediaNotas: function () {
        const notas = this.notas
        const media = notas.reduce((acomulador,nota) => {
          return acomulador + nota
        },0)
        return media / notas.length
    },
    
    classificarDesempenho: function () {
        const media = this.calcularMediaNotas()

        if (media >= 9) {
            console.log("Excelente");
        } else if (media <= 9) {
            console.log('Bom');
        } else if (media <= 6) {
            console.log( 'Regular');
        } else {
            console.log('Reprovado');
        }
    }
}

console.log(pessoa.calcularMediaNotas())
pessoa.classificarDesempenho();


// DESAFIO 2

const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2019,
    cor: 'Prata',
}

carro.dono = 'gustavo'
carro.valor = 'caro'

for (i in carro) {
    console.log(i, carro[i])
}

// DESAFIO 3

const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2019,
    cor: 'Prata',
    ligado: false,
    ligar: function () {
        if (!this.ligado) {
            this.ligado = true
            console.log('o carro está ligado');
        } else {
            console.log('o carro já está ligando');
        }
    },
    desligar: function () {
        if (this.ligado) {
            this.ligado = false
            console.log('o Carro está desligado');
        } else {
            console.log('o carro já esta desligado');
        }
    },
    obterDetalhes: function () {
        const estado = this.ligado ? 'ligado' : 'desligado'
        return `detalhes do carro ${this.marca} ${this.modelo} ${this.ano} ${this.cor} ${estado}`
    }
}


console.log(carro.obterDetalhes())

// DESAFIO 4

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
    ligado: false, // Nova propriedade indicando o estado do carro (ligado/desligado)
    placa: "ABC1234" // Nova propriedade representando a placa do veículo
};

Object.defineProperty(carro, "placa", {enumerable: false})

for (car in carro) {
    // console.log(car, carro[car]);
}

const chavesEnu = Object.keys(carro)

console.log(chavesEnu);

const placa = carro.placa

console.log(placa);


// DESAFIO 5

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Gold",
    ligado: false, // Nova propriedade indicando o estado do carro (ligado/desligado)
    placa: "ABC1234" // Nova propriedade representando a placa do veículo
};

const carroNovo = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
};

carroNovo.placa = "MDS134"

const carroComNovosDetalhes = {...carro, ...carroNovo,}
console.log(carroComNovosDetalhes);