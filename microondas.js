let comidas = [
  { prato: "Pipoca", tempo: 10 },
  { prato: "Macarrão", tempo: 8 },
  { prato: "Carne", tempo: 15 },
  { prato: "Feijão", tempo: 12 },
  { prato: "Brigadeiro", tempo: 8 },
];

function microondas(prato, tempo) {
  let param1 = Number.isInteger(prato);
  let param2 = Number.isInteger(tempo);

  param1 == false
    ? console.log("Prato indefinido, por favor digite um caracter valido!")
    : param2 == false
    ? console.log("Tempo indefinido, por favor digite um caracter valido!")
    : "";

  if (param1 && param2) {
    if ((prato > 0 && prato < 5) || params) {
      let padrao = comidas[prato - 1].tempo;
      let bip = "\nPrato pronto, bom apetite!!!";
      let texto = `Prato selecionado foi: ${comidas[prato - 1].prato}\n`;

      if (tempo < padrao) {
        return `${texto}Tempo insuficiente ${bip}`;
      } else if (tempo == padrao) {
        return `${texto}Tempo padrao selecionado ${bip}`;
      } else if (tempo < padrao * 2) {
        return `${texto}Potencia alterada com sucesso! ${bip}`;
      } else if (tempo < padrao * 3) {
        return `${texto}A comida queimou ${bip}`;
      } else {
        return `${texto}Kabumm ${bip}`;
      }
    } else {
      return "O número digitado não foi encontrado dentre as opções do MENU!";
    }
  }else{
    return ""
  }
}

//MENU
//1-Pipoca
//2-Macarrão
//3-Carne
//4-Feijão
//5-Brigadeiro

//De acordo com o menu, use a função microondas().
//Digite primeiro o numero respectivo ao prato escolhido, e a quantidade de tempo em segundos:
console.log(microondas("a", 1));

//
// + console.log("Prato indefinido, por favor digite um caracter valido"
// + console.log("Tempo indefinido, por favor digite um caracter valido"
