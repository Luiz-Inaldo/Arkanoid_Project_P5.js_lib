function jogo() {
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
    confirmaMovimento();
    changeDificult();
    if (vidasRestantes === 0){
      tela = 'game over';
    } else if (keyIsDown(13)){
      somClick.play();
      tela = 'pause menu';
    }
}