var canvas;
var cenario, form;
var database;

var carimg1, carimg2;
var pista, player;
var car1, car2;
var cars = [];
//declarar as variáveis playerCount e gameState
var playerCount = 0;
var gameState = 0;

function preload() {
  cenario = loadImage("./assets/planodefundo.png");
  carimg1 = loadImage("car1.png");
  carimg2 = loadImage("car2.png");
  pista = loadImage("pista.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 
  //1º) criar o objeto jogo da classe Game
  game = new Game();
  //2º) chamar o método start do objeto jogo
  game.start();

  //3º) chamar a função getState para sincronizar o gameState
  game.getState();
}

function draw() {
  background(cenario);




}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
