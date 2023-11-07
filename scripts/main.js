// variáveis de tela e menu de jogo
let tela = 'main menu';
let xMenu = 250;
let yMenu1 = 350;
let yMenu2 = 410;
let yBack = 430;
let larguraMenu = 200;
let alturaMenu = 50;

function setup() {
  createCanvas(700, 500);
}

function draw() {
  // tela de menu
  if (tela === 'main menu'){
    textoMenuPrincipal();
  }
  
  // jogo funcionando
  if (tela === 'game'){
    jogo();
  }
  
  // sobre o jogo
  if (tela === 'about'){
    textoSobre();
  }
  
  // menu de pausa
  if (tela === 'pause menu'){
    textoMenuPausa();
  }
  
  // game over
  if (tela === 'game over'){
    gameOver();
  }
}
