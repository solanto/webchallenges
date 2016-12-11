var canvas = document.getElementById("sky");
var ctx = canvas.getContext("2d");
var drops = [];
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
    drops[i] = new Raindrop;
  }
}

function fall() {
  drops[i].y += drops[i].speed
}

function show() {
  ctx.beginPath();
  ctx.rect(drops[i].x, drops[i].y, drops[i].width, drops[i].length);
  ctx.fillStyle = "#d829ff";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  for (i = 0; i < numberOfRaindrops; i++) { 
    fall();
    show();
  }
}

setInterval(draw, 10);