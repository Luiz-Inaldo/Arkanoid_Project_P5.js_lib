function textoSobre() {
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
    text('Press LEFT or RIGHT to move the player and SPACEBAR to throw the ball. Destroy all the blocks on the screen to increase the game dificult. When you reach the level hard, the game will enter on a infinit loop, until you lose. ', 220, 230, 250, 160);
    
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