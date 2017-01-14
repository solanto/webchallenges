var motionBlurAmount = 0;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var backgroundOpacity = 1 - motionBlurAmount;
var backgroundColor = window.getComputedStyle(canvas, null).getPropertyValue('background-color');
var canvasWidth = window.getComputedStyle(canvas, null).getPropertyValue('width');
canvas.width = canvasWidthFromCSS.substring(0, canvasWidthFromCSS.length - 2);
var canvasHeight = window.getComputedStyle(canvas, null).getPropertyValue('height');
canvas.height = canvasHeightFromCSS.substring(0, canvasHeightFromCSS.length - 2);

function random(min, max) {
  return Math.floor((Math.random() * max) + min);
}

function map(value, vmin, vmax, min, max) {
  return min + (max - min) * ((value - vmin) / (vmax - vmin));
}

function clearFrame() {
  ctx.globalAlpha = backgroundOpacity;
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCurveThrough(points) {
  ctx.moveTo(points[0].x, points[0].y);
  for (i = 1; i < points.length - 2; i ++) {
    var xc = (points[i].x + points[i + 1].x) / 2;
    var yc = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
  }
  ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
}

function Particle(moveSpeed) {
  this.x = random(0, canvas.width),
  this.y = random(0, canvas.height),
  this.moveSpeed = moveSpeed,
  this.history = [],
  this.movementUpdate = function() {
    this.yMoveDirection = random(-1,1);
    this.xMoveDirection = random(-1,1);
    this.x += this.xMoveDirection * this.moveSpeed;
    this.y += this.yMoveDirection * this.moveSpeed;
  }
}

function draw() {
  clearFrame();
}

function start() {
  setInterval(draw, 10);
}

start();