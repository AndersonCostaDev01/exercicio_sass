const readline = require('readline');

// Cria uma interface para entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita o nome do usuário
rl.question('Qual é o seu nome? ', (nome: string) => {
  console.log(`Olá, ${nome}!`);
  
  // Fecha a interface
  rl.close();
});
