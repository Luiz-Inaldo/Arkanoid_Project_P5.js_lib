function textTransition(){
    background(0);

    textSize(80);
    fill(255);
    textFont(font);
    textAlign(CENTER);
    text('Level: ' + dificuldade, 345, 150);

    textSize(60);
    textAlign(CENTER);
    text('Lifes: ' + vidasRestantes, 345, 250);

    textSize(25);
    textAlign(CENTER);
    text('Press ESC to continue...', 345, 480);

    if (keyIsDown(27)){
        somClick.play();
        tela = 'game';
    }
}