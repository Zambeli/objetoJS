const estudante = {
    nome: 'Gustavo',
    idade: 22,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['559191919191', '559292929292'],
    enderecos: [{
        rua: 'aparicio mariense',
        numero: '1389',
        complemento: 'apto 301'
    }]
}

estudante.enderecos.push({
    rua: 'amaro souto',
    numero: '310',
    complemento: '1'
})

console.log(estudante.enderecos)
console.log(estudante.enderecos[1])

const listaEnderecosComComplemento = estudante.enderecos.filter(endereco => endereco.complemento)

console.log(listaEnderecosComComplemento);