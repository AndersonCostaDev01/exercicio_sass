import * as readline from 'readline';

// Cria uma interface para entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para solicitar um número
const solicitarNumero = (pergunta: string): Promise<number> => {
  return new Promise((resolve) => {
    rl.question(pergunta, (entrada) => {
      const numero = parseFloat(entrada); // Converte a entrada para número
      resolve(numero);
    });
  });
};

// Função principal
const main = async () => {
  const numero1 = await solicitarNumero('Digite o primeiro número: ');
  const numero2 = await solicitarNumero('Digite o segundo número: ');

  const resultado = numero1 * numero2; // Multiplica os números
  console.log(`A multiplicação de ${numero1} e ${numero2} é: ${resultado}`);

  rl.close(); // Fecha a interface
};

// Executa a função principal
main();
