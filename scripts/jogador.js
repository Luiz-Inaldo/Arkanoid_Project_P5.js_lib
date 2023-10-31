let xJogador = 220;
let yJogador = 475;
let larguraJogador = 80;
let alturaJogador = 15;
let velocidadeXJogador = 5;

let isJogadorMovimento = false;

function jogadorNaTela() {
  image(imagemJogador, xJogador, yJogador, larguraJogador, alturaJogador);
}

function movimentaJogador() {
  if (isJogadorMovimento){
    if (keyIsDown(LEFT_ARROW) && xJogador > 0) {
      xJogador -= velocidadeXJogador;
    } else if (keyIsDown(RIGHT_ARROW) && xJogador + larguraJogador < 550) {
      xJogador += velocidadeXJogador;
    }  
  } 
}
