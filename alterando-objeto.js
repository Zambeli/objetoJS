const estudante = {
    nome: 'Gustavo',
    idade: 22,
    cpf: '12312312312',
    turma: 'JavaScript'
}

estudante['telefone'] = '55991893368'
// estudante.telefone = '55991893368'

// console.log(estudante['telefone']);
// // console.log(estudante.telefone);

// console.log(estudante);

estudante.nome = 'Gusta'

// console.log(estudante);

const estudante2 = {}

estudante2.nome = 'Ana maria'

// console.log(estudante2);



const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}

delete objPersonagem.aliado
delete objPersonagem['status']

// console.log(objPersonagem);

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]
 
// console.log(delProp) //true
// console.log(delPropInexistente) //true



// const pessoa = {
//     nome: "Bruce Banner",
//     dataNascimento: "25/01/1980",
//     carteiraIdentidade: "997776-X",
//     email: "profbanner@email.com",
//     telefone: "+552877776666",
//     cidade: "Cachoeiro de Itapemirim",
//     estado: "ES"
// }


const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
  };
  
  console.log(pessoa.nome);
  
  console.log(pessoa.telefone);
  
  pessoa.telefone = "11 2223333444";
  
  console.log(pessoa.telefone);
  
  pessoa.nome = "Luma Silva";
  
  console.log(pessoa);
  
  const novaPessoa = {
    nome: "Pedro",
  };

  console.log(novaPessoa)