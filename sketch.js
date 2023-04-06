let colidiu = false;

let ponto;
let raquetada;

let jPoint = 0;
let ePoint = 0;

//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 40;
let raio = dBolinha/2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da Raquete
let xRaquete = 20;
let yRaquete = 150;
let rComprimento = 10;
let rAltura = 90

//variaveis do inimigo
let xEnemy = 570;
let yEnemy = 150;

let velocidadeYEnemy;

function setup() {
  createCanvas(600, 400);
 
}

function draw() {
  background(0);
  incluiPlacar();
  marcaPonto();
  preLoad();
  
  mostraBolinha();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xEnemy, yEnemy);

  colisaoBolinha();
  //jogador
  colisaoRaquete(xRaquete, yRaquete);
  //inimigo
  colisaoRaquete(xEnemy, yEnemy);
  
  bolinhaNaoFicaPresa()
  
  velocidadeBolinha();
  moveRaquete();
  enemyMove();
}

function preLoad() {
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function mostraBolinha(){
  circle(xBolinha,yBolinha, dBolinha);
}

function mostraRaquete(x,y){
  rect(x,y, rComprimento, rAltura);
}


function velocidadeBolinha() {
  xBolinha += velocidadeXBolinha;
 yBolinha += velocidadeYBolinha;
}

function moveRaquete() {
  if(keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
  }
}

function enemyMove() {
  velocidadeYEnemy = yBolinha - yEnemy - rComprimento /2 - 30;
    yEnemy += velocidadeYEnemy;
}


function colisaoBolinha() {
  if(xBolinha + raio > width || xBolinha - raio < 0) {
         velocidadeXBolinha *= -1;
       } 
  if(yBolinha + raio > height || yBolinha - raio < 0) {
         velocidadeYBolinha *= -1;
       }
}

function colisaoRaquete(x,y) {
 colidiu = collideRectCircle(x, y, rComprimento, rAltura, xBolinha, yBolinha, raio);
    if(colidiu){
      velocidadeXBolinha *= -1;
  
    }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}

function incluiPlacar() {
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text(jPoint, 278, 26);
    text(ePoint, 321, 26);
}

function marcaPonto() {
    if (xBolinha > 580) {
        jPoint += 1;
       ponto.play();
    }
    if (xBolinha < 20) {
        ePoint += 1;
       ponto.play();
    }
}
