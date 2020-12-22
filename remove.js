// Variaveis auxiliares
let j = 0;  // Counter
let timer = 0;  // Tempo
let salvos = document.getElementsByClassName("_9AhH0");     // Encontrar os salvos
let remover = document.getElementsByClassName("wpO6b ");    // Encontrar botoes de remover dos favs e fechar

function Remover() {
    setTimeout(() => {  salvos[j].click(); }, 200);
    setTimeout(() => {  remover[5].click(); }, 800);
    setTimeout(() => {  remover[remover.length - 1].click(); }, 900);
    setTimeout(() => {  j++; }, 800);
}

// Copiar e colar quantos favoritos tiver
setTimeout(() => {  Remover(); }, timer);
timer += 1500;
