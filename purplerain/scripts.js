var canvas = document.getElementById("sky");
var ctx = canvas.getContext("2d");
var drops = [];
var numberOfRaindrops = 500;
canvas.width = 900;
canvas.height = 500;

function random(min, max) {
	return Math.floor((Math.random() * max) + min);
}

function Raindrop() {
  this.x = random(0, canvas.width),
  this.y = random(-20, -500),
  this.length = random(6, 10),
  this.width = 3,
  this.speed = random(2, 5)
}

function populateRain() {
  for (i = 0; i < numberOfRaindrops; i++) { 
    drops[i] = new Raindrop;
  }
}

function fall() {
  drops[i].y += drops[i].speed
  drops[i].speed += 0.05
  if(drops[i].y > canvas.height) {
    drops[i] = new Raindrop;
  }
}

function show() {
  ctx.beginPath();
  ctx.rect(drops[i].x, drops[i].y, drops[i].width, drops[i].length);
  ctx.fillStyle = "#d829ff";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (i = 0; i < numberOfRaindrops; i++) { 
    fall();
    show();
  }
}

function start() {
  populateRain();
  setInterval(draw, 10);
}

start();