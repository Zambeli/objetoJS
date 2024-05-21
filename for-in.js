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
    },
    {
        rua: 'amaro souto',
        numero: '310',
        complemento: null
    }]
}


for (let chave in estudante) {
    const tipo = typeof estudante[chave]
    if (tipo !== 'object' && tipo !== 'function') {
        const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto);
    }
}

