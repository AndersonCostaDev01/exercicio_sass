/*
    Criação do array com nome e nota dos alunos 
*/

const alunos = [
    { nome: 'Marcos', nota: 7 },
    { nome: 'Renan', nota: 8 },
    { nome: 'Carlos', nota: 2 },
    { nome: 'Laura', nota: 10 },
    { nome: 'Cinthia', nota: 5 }
];

/*
    Criação da função para filtrar os alunos 
*/

const filtrarAlunosAprovados = alunos =>
    alunos.filter(aluno => aluno.nota >= 6);

const filtrarAlunosReprovados = alunos =>
    alunos.filter(aluno => aluno.nota < 6);

/*
    Mostra na tela os alunos aprovados 
*/
const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log('Alunos Aprovados:');
console.log(alunosAprovados);

/*
    Mostra na tela os alunos reprovados 
*/
const alunosReprovados = filtrarAlunosReprovados(alunos);
console.log('Alunos Reprovados:');
console.log(alunosReprovados);
