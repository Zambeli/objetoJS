const estudante = {
    nome: 'Gustavo',
    idade: 22,
    cpf: '12312312312',
    turma: 'JavaScript'
}

function exibeInfoEstudante (objEstudante, infoEstudante) {
    return objEstudante[infoEstudante]
}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));

console.log(estudante)