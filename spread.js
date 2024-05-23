const estudante = {
        nome: 'Gustavo',
        idade: 22,
        cpf: '12312312312',
        turma: 'JavaScript',
        bolsista: true,
        telefones: ['559191919191', '559292929292','3216356713'],
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

function exibirTelefones (telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);

exibirTelefones(...estudante.telefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);