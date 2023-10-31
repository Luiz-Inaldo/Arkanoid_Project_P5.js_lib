let imagemJogador;
let imagemFundo;
let imagemBola;
let imagemBloco1;
let imagemBloco2;
let imagemBloco3;
let imagemBloco4;
let imagemBloco5;
let imagemBloco6;
let imagemBloco7;
let imagemBloco8;

let somTema;
let somRaquete;
let somBola;
let somPerdeu;
let somWin;
let somClick;

let font;

function preload() {
  // imagens
  imagemFundo = loadImage("imagens/background.png");
  imagemJogador = loadImage("imagens/jogador.png");
  imagemBola = loadImage("imagens/bola2.png")
  imagemBloco1 = loadImage("imagens/bloco1.png");
  imagemBloco2 = loadImage("imagens/bloco2.png");
  imagemBloco3 = loadImage("imagens/bloco3.png");
  imagemBloco4 = loadImage("imagens/bloco4.png");
  imagemBloco5 = loadImage("imagens/bloco5.png");
  imagemBloco6 = loadImage("imagens/bloco6.png");
  imagemBloco7 = loadImage("imagens/bloco7.png");
  imagemBloco8 = loadImage("imagens/bloco8.png");
  
  // sons
  //somTema = loadSound("sons/Theme.mp3");
  somRaquete = loadSound("sons/Tennis_Hit.mp3");
  somBola = loadSound("sons/Point.mp3");
  somPerdeu = loadSound("sons/Life_Wasted.mp3");
  somWin = loadSound("sons/Win.mp3");
  somClick = loadSound("sons/Click.mp3");
  
  // fonte
  font = loadFont('Fonte/Main_Font.ttf');
}

function changeDificult(){
  if(dificuldade === "Easy" && blocosRestantes === 0){
    somWin.play();
    dificuldade = "Medium";
    voltaPosInicial();
    velocidadeXBola = 7;
    velocidadeYBola = 7;
    velocidadeXJogador = 7;
    isBolaMovimento = false;
    isJogadorMovimento = false;
    blocosRestantes = blocos.length;
    for (let i = 0; i < blocos.length; i++){
      blocos[i].existe = true;
    }
  } else if (dificuldade === "Medium" && blocosRestantes === 0){
    somWin.play();
    dificuldade = "Hard";
    voltaPosInicial();
    velocidadeXBola = 9.5;
    velocidadeYBola = 9.5;
    velocidadeXJogador = 10;
    isBolaMovimento = false;
    isJogadorMovimento = false;
    blocosRestantes = blocos.length;
    for (let i = 0; i < blocos.length; i++){
      blocos[i].existe = true;
    }
  } else if (dificuldade === "Hard" && blocosRestantes === 0){
    somWin.play();
    voltaPosInicial();
    isBolaMovimento = false;
    isJogadorMovimento = false;
    blocosRestantes = blocos.length;
    for (let i = 0; i < blocos.length; i++){
      blocos[i].existe = true;
    }
  }
}