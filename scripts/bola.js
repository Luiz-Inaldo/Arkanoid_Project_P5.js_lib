let xBola = 250;
let yBola = 457;
let diametro = 20;
let raio = diametro / 2;

let velocidadeXBola = 5;
let velocidadeYBola = 5;
let isBolaMovimento = false;
let colisaoBloco = false;
let colisaoJogador = false;

function mostrarBola() {
  fill(128, 128, 128);
  image(imagemBola, xBola, yBola, 20, 20);
  //circle(xBola, yBola, diametro);
}

function keyPressed() {
  if (keyCode === 32) {
    isBolaMovimento = true;
    isJogadorMovimento = true;
  }
}

function confirmaMovimento() {
  if (isBolaMovimento === true) {
    xBola += velocidadeXBola;
    yBola -= velocidadeYBola;
  }
}

function verificaColisaoParede() {
  if (xBola > 520 || xBola < 5) {
    velocidadeXBola *= -1;
  } else if (yBola > 495 || yBola < 5) {
    velocidadeYBola *= -1;
  }
}

function verificaColisaoBase() {
  if (yBola + raio > height) {
    somPerdeu.play();
    voltaPosInicial();
    vidasRestantes -= 1;
  }
}

function voltaPosInicial(){
    xJogador = 220;
    yJogador = 475;
    xBola = 250;
    yBola = 457;
    isBolaMovimento = false;
    isJogadorMovimento = false;
}

function verificaColisaoBloco() {
  for (let i = 0; i < blocos.length; i++) {
    if (blocos[i].existe === true) {
      colisaoBloco = collideRectCircle(
        blocos[i].x,
        blocos[i].y,
        larguraBloco,
        alturaBloco,
        xBola,
        yBola,
        raio
      );
      if (colisaoBloco === true) {
        blocos[i].existe = false;
        somBola.play();
        velocidadeYBola *= -1;
        pontos += 10;
        blocosRestantes -= 1;
      }
    }
  }
}

function verificaColisaoJogador(x, y) {
  colisaoJogador = collideRectCircle(x, y, larguraJogador, alturaJogador, xBola, yBola, diametro);
  if (colisaoJogador === true) {
    somRaquete.play();
    velocidadeYBola *= -1;
  }
}

function movimentaBolaConjunto() {
  if (isBolaMovimento === false && isJogadorMovimento === false){
    if (keyIsDown(LEFT_ARROW) && xJogador > 0) {
      xBola -= velocidadeXBola;
    } else if (keyIsDown(RIGHT_ARROW) && xJogador + larguraJogador < 550) {
      xBola += velocidadeXBola;
    }
  } 
}
