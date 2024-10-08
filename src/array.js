console.log('');

const redeSocial = ['facebok', 'intagram', 'gitHub'];

for (let i = 0; i < redeSocial.length; i++) {
    console.log(`Eu tenho contas no: ${redeSocial[i]}`);
}

console.log('');

redeSocial.forEach(function (nomeDaRedeSocial, indice) {
    console.log(`# ${indice} Eu tenho conta no: ${nomeDaRedeSocial}`);
})

console.log('');

const alunos = ['Gustavo', 'Marcos', 'Renan', 'Wagner'];

const alunos2 = alunos.map(function (itemAtual) {
    return {
        nome: itemAtual,
        curso: 'forntend' // Observação: parece haver um erro de digitação em "frontend"
    };
});

console.log(alunos2);
console.log('');

const numeros = [1, 2, 3, 4, 5];
const dobroDosNumeros = numeros.map(function (numeroAtual) {
    return numeroAtual * 2;
});

console.log(dobroDosNumeros);
console.log('');

const Gustavo = alunos2.find(function(item) {
    return item.nome === 'Gustavo';
});

console.log(Gustavo);
console.log('');

const Gustavo2 = alunos2.findIndex(function(item) {
    return item.nome === 'Wagner';
});

console.log(Gustavo2);
console.log('');

const frontend = alunos2.filter(function(item){
    return item.curso === 'forntend';
})

console.log(frontend);
console.log('');


