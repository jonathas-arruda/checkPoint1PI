let comidas = [
  { prato: "Pipoca", tempo: 10 },
  { prato: "Macarrão", tempo: 8 },
  { prato: "Carne", tempo: 15 },
  { prato: "Feijão", tempo: 12 },
  { prato: "Brigadeiro", tempo: 8 },
];

function microondas(prato, tempo) {
  let padrao = comidas[prato - 1].tempo
  let bip ="\n Prato pronto, bom apetite!!!"
  let texto=`Prato selecionado foi: ${comidas[prato - 1].prato}\n`

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
}

//MENU
//1-Pipoca
//2-Macarrão
//3-Carne
//4-Feijão
//5-Brigadeiro

//De acordo com o menu, use a função microondas().
//Digite primeiro o numero respectivo ao prato escolhido, e a quantidade de tempo em segundos:
console.log(microondas(3, 15));
