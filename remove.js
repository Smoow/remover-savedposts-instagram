// Variaveis auxiliares
let j = 0;  // Counter
let timer = 0;  // Tempo
let salvos = document.getElementsByClassName("_9AhH0");     // Encontrar os salvos
let remover = document.getElementsByClassName("wpO6b ");    // Encontrar botoes de remover dos favs e fechar

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function removeScript() {
    while (j < salvos.length) {
      salvos[j].click();
      await sleep(700);
      remover[5].click();
      await sleep(200);
      remover[remover.length - 1].click();
      await sleep(200);
      j++;
  }
}

removeScript();
