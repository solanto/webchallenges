var canvas = document.getElementById("sky");
var ctx = canvas.getContext("2d");
var drops = [];
var numberOfRaindrops = 100;
var dropNumber;

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
  drops[dropNumber].y += Raindrop.speed
}

function show() {
  ctx.beginPath();
  ctx.rect(drops[dropNumber].x, drops[dropNumber].y, drops[dropNumber].width, drops[dropNumber].length);
  ctx.fillStyle = "#d829ff";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  for (dropNumber = 0; dropNumber < numberOfRaindrops; dropNumber++) { 
    fall();
    show();
  }
}

setInterval(draw, 10);