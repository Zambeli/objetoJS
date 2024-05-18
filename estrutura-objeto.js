const estudante = {
    nome: 'Gustavo',
    idade: 22,
    cpf: '12312312312',
    turma: 'JavaScript'
}

console.log(estudante.nome);

console.log(`O nome do estudante é ${estudante.nome}`);
console.log(`os três primeiros números do cpf são ${estudante.cpf.substring(0,3)}`);