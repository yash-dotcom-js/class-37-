var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState

function preload() {
  backgroundImage = loadImage("assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();


}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
