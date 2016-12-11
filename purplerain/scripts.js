var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rain = [];
var numberOfRaindrops = 100;

function Raindrop() {
  this.x = canvas.width/2,
  this.y = 0,
  this.length = 10,
  this.width = this.length/4,
  this.speed = 1
}

function populateRain() {
  for (i = 0; i < numberOfRaindrops; i++) { 
    rain[i] = new Raindrop;
  }
}

function fall() {
  Raindrop.y += Raindrop.speed
}

function show() {
  ctx.beginPath();
  ctx.rect(brickX, brickY, brickWidth, brickHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}