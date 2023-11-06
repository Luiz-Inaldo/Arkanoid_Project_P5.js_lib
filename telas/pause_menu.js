function textoMenuPausa() {
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