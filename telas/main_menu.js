function textoMenuPrincipal() {
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