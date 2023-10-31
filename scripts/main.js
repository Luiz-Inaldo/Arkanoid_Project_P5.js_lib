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
    background(0);
    textAlign(CENTER);
    
    // título
    fill(225);
    noStroke();
    textSize(90);
    textFont(font);
    text('ARKANOID', 345, 150);
    textSize(15);
    text('By: Luiz_Inaldo', 520, 170);
    
    // opção 1
    if (mouseX > xMenu && mouseX < xMenu + larguraMenu && mouseY > yMenu1 && mouseY < yMenu1 + alturaMenu){
      stroke(225);
      fill(0);
      rect(xMenu, yMenu1, larguraMenu, alturaMenu, 15);
      if (mouseIsPressed){
        somClick.play();
        tela = 'game';
      }
    }  
    
    fill(255);
    noStroke();
    textSize(26);
    text('Start', 350, 385);
    
    // opção 2
    if (mouseX > xMenu && mouseX < xMenu + larguraMenu && mouseY > yMenu2 && mouseY < yMenu2 + alturaMenu){
      stroke(225);
      fill(0);
      rect(xMenu, yMenu2, larguraMenu, alturaMenu, 15);
      if (mouseIsPressed){
        somClick.play();
        tela = 'about';
      }
    }   
    
    fill(255);
    noStroke();
    textSize(26);
    text('About', 350, 445);
    
    // hiscore
    textAlign(LEFT);
    noStroke();
    textSize(16);
    text('Highscore: ' + highscore, 50, 490);
  }
  
  // jogo funcionando
  if (tela === 'game'){
    background(imagemFundo);
    blocoDePontuacao();
    jogadorNaTela();
    mostrarBola();
    mostraBlocos();
    keyPressed();
    verificaColisaoParede();
    verificaColisaoBase();
    verificaColisaoBloco();
    verificaColisaoJogador(xJogador, yJogador);
    movimentaJogador();
    //movimentaBolaConjunto();
    confirmaMovimento();
    changeDificult();
    if (vidasRestantes === 0){
      tela = 'game over';
    } else if (keyIsDown(13)){
      somClick.play();
      tela = 'pause menu';
    }
  }
  
  // sobre o jogo
  if (tela === 'about'){
    background(0);
    textAlign(CENTER);
    
    // título
    textSize(70);
    noStroke();
    fill(225);
    text('ABOUT', 345, 70);
    
    textSize(16);
    text('Based on original arcade game Arkanoid(1986).', 345, 100);
    text('Programmed on p5.js web framework.', 345, 120);
    
    // como jogar
    textSize(30);
    text('HOW TO PLAY:', 345, 200);
    
    textSize(16);
    text('Press ← or → to move the player and SPACEBAR to throw the ball. Destroy all the blocks on the screen to increase the game dificult. When you reach the level hard, the game will enter on a infinit loop, until you lose. ', 220, 230, 250, 160);
    
    // voltar
    if (mouseX > 50 && mouseX < 50 + larguraMenu && mouseY > yBack && mouseY < yBack + alturaMenu){
      stroke(255);
      fill(0);
      rect(50, yBack, larguraMenu, alturaMenu, 15);
      if (mouseIsPressed){
        somClick.play();
        tela = 'main menu';
      }
    }  
    
    fill(255);
    noStroke();
    textSize(26);
    text('Back', 150, 465);
  }
  
  // menu de pausa
  if (tela === 'pause menu'){
    background(0);
    textAlign(CENTER);
    
    fill(255);
    textSize(80);
    text('GAME PAUSED', 345, 150);
    
    textSize(20);
    text('Press ESC to resume.', 345, 250);
    
    if (keyIsDown(27)){
      somClick.play();
      tela = 'game';
    }
  }
  
  // game over
  if (tela === 'game over'){
    background(0);
    textAlign(CENTER);
    
    fill(255);
    textSize(80);
    text('Game Over', 345, 150);
    
    textAlign(LEFT);
    textSize(20);
    text('Level: '+ dificuldade + ' Score: '+ pontos, 150, 250, 150, 100);
    
    textAlign(CENTER);
    text('Press ENTER to back to main menu.', 345, 450);
    
    // voltar ao menu principal
    if (keyIsDown(13)){
      somClick.play();
      tela = 'main menu';
      dificuldade = "Easy";
      vidasRestantes = 4;
      for (let i = 0; i < blocos.length; i++){
        blocos[i].existe = true;
      }
      for (let i = 0; i < vidas.length; i++){
        vidas[i].existe = true;
      }
      blocosRestantes = blocos.length;
      if (pontos > highscore){
        highscore = pontos;
      }
      pontos = 0;
    }
  }
}
