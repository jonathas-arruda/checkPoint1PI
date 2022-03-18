const readlineSync = require("readline-sync");

let prato = readlineSync.keyIn(
  `
---MENU---
  1-Pipoca
  2-Macarrão
  3-Carne
  4-Feijão
  5-Brigadeiro
  
  Digite o numero respectivo ao prato escolhido:`,
  {
    limit: "$<1-5>",
  }
);

let tempo = readlineSync.questionInt(
`Agora, digite o tempo desejado em segundos:`,{
    limitMessage: 'Desculpe, "$<lastInput>" não é um caracter válido, por favor digite um número !',
  }
);

let comidas = [
  { prato: "Pipoca", tempo: 10 },
  { prato: "Macarrão", tempo: 8 },
  { prato: "Carne", tempo: 15 },
  { prato: "Feijão", tempo: 12 },
  { prato: "Brigadeiro", tempo: 8 },
];

function microondas(prato, tempo) {
    let padrao = comidas[prato - 1].tempo;
    let bip = "\nPrato pronto, bom apetite!!!";
    let texto = `Prato selecionado foi: ${comidas[prato - 1].prato}\n`;

    if (tempo < padrao) {
      return `${texto}Tempo insuficiente ${bip}`;
    } else if (tempo == padrao) {
      return `${texto}Tempo padrão selecionado! ${bip}`;
    } else if (tempo < padrao * 2) {
      return `${texto}Potencia alterada com sucesso! ${bip}`;
    } else if (tempo < padrao * 3) {
      return `${texto}A comida queimou ${bip}`;
    } else {
      return `${texto}Kabumm ${bip}`;
    }
  }
console.log(microondas(prato, tempo));