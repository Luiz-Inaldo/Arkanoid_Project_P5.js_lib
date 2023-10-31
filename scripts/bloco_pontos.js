let pontos = 0;
let highscore = 0;
let dificuldade = "Easy";
let vidasRestantes = 4;

let vidas = [
  {
    id: 0,
    x: 565,
    y: 420,
    existe: true
  },
  {
    id: 1,
    x: 625,
    y: 420,
    existe: true
  },
  {
    id: 2,
    x: 565,
    y: 450,
    existe: true
  },
  {
    id: 3,
    x: 625,
    y: 450,
    existe: true
  }
];

function blocoDePontuacao() {
  fill(106, 90, 205);
  rect(550, 0, 150, 500);
  //rect(15,height/2, 50,50);
  //rect(485,height/2, 50,50);
  score();
  dificult();
  blocks();
  lifes();
  borda();
}

function score() {
  noStroke();
  fill(255);
  textSize(20);
  textAlign(LEFT);
  text("SCORE:", 585, 60);

  fill(0);
  rect(560, 75, 130, 80);

  noStroke();
  fill(255);
  textSize(40);
  textAlign(CENTER);
  text(pontos, 620, 126);
}

function dificult() {
  fill(255);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text("LEVEL:", 620, 200);

  fill(0);
  rect(560, 215, 130, 40);

  fill(255);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text(dificuldade, 620, 240);
}

function blocks() {
  fill(255);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text("BLOCKS:", 620, 300);

  fill(0);
  rect(560, 315, 130, 40);

  fill(255);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text(blocosRestantes, 620, 340);
}

function lifes() {
  fill(255);
  noStroke();
  textSize(16);
  textAlign(CENTER);
  text("Lifes:", 623, 400);
  for (let i = 0; i < vidas.length; i++){
    if (vidas[i].existe === true){
      image(imagemJogador, vidas[i].x, vidas[i].y, 50, 15);
    }
  }
  if (vidasRestantes === 3){
    vidas[3].existe = false;
  } else if (vidasRestantes === 2){
    vidas[2].existe = false;
  } else if (vidasRestantes === 1){
    vidas[1].existe = false;
  } else if (vidasRestantes === 0){
    vidas[0].existe = false;
    //tela = 'game over';
  }
}

function borda() {
  fill(0, 206, 209);
  rect(0, 0, 5, 700);
  rect(0, 0, 550, 5);
  rect(545, 0, 5, 700);
  rect(0, 495, 550, 5);
}
