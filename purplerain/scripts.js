var numberOfRaindrops = 500;
var dropColor = "#8a2be2";
var motionBlurAmount = 0.2;

var canvas = document.getElementById("sky");
var ctx = canvas.getContext("2d");
var drops = [];
var backgroundOpacity = 1 - motionBlurAmount;
var backgroundColor = window.getComputedStyle(canvas, null).getPropertyValue('background-color');
var canvasWidthFromCSS = window.getComputedStyle(canvas, null).getPropertyValue('width');
canvas.width = canvasWidthFromCSS.substring(0, canvasWidthFromCSS.length - 2);
var canvasHeightFromCSS = window.getComputedStyle(canvas, null).getPropertyValue('height');
canvas.height = canvasHeightFromCSS.substring(0, canvasHeightFromCSS.length - 2);

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
  this.opacity = map(this.z, 0, 20, 0.7, 1)
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
  cts.globalAlpha = drops[i].opacity;
  ctx.beginPath();
  ctx.rect(drops[i].x, drops[i].y, drops[i].width, drops[i].length);
  ctx.fillStyle = dropColor;
  ctx.fill();
  ctx.closePath();
}

function clearFrameWithMotionBlur() {
  ctx.globalAlpha = backgroundOpacity;
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  clearFrameWithMotionBlur();
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
