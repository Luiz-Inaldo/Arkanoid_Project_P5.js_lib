function gameOver() {
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