var canvas = document.getElementById("sky");
var ctx = canvas.getContext("2d");
var drops = [];
var numberOfRaindrops = 500;
var dropColor = "#8a2be2";

canvas.width = 900;
canvas.height = 500;
ctx.fillStyle = dropColor;

function random(min, max) {
  return Math.floor((Math.random() * max) + min);
}

function map(value, vmin, vmax, min, max) {
  return min + (max - min) * ((value - vmin) / (vmax - vmin));
}

function Raindrop() {
  this.x = random(0, canvas.width),
  this.y = random(-20, -500),
  this.z = random(0, 20),
  this.length = random(map(this.z, 0, 20, 7, 13), map(this.z, 0, 20, 8, 14)),
  this.width = random(map(this.z, 0, 20, 1, 3), map(this.z, 0, 20, 2, 4)),
  this.speed = random(map(this.z, 0, 20, 3, 8), map(this.z, 0, 20, 4, 9)),
  this.gravity = map(this.z, 0, 20, 0.001, 0.05)
}

function populateRain() {
  for (i = 0; i < numberOfRaindrops; i++) { 
    drops[i] = new Raindrop;
  }
}

function dropFall() {
  drops[i].y += drops[i].speed;
  drops[i].speed += drops[i].gravity;
  if(drops[i].y > canvas.height) {
    drops[i] = new Raindrop;
  }
}

function showDrop() {
  ctx.beginPath();
  ctx.rect(drops[i].x, drops[i].y, drops[i].width, drops[i].length);
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (i = 0; i < numberOfRaindrops; i++) { 
    dropFall();
    showDrop();
  }
}

function start() {
  populateRain();
  setInterval(draw, 10);
}

start();