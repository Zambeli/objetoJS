const estudante = {
    nome: 'Gustavo',
    idade: 22,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['559191919191', '559292929292'],
    media: 10,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase;
    }
}

console.log(estudante.estaAprovado(7));

