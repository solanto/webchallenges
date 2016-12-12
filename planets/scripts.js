var motionBlurAmount = 0.2;

var canvas = document.getElementById("space");
var ctx = canvas.getContext("2d");
var backgroundOpacity = 1 - motionBlurAmount;
var backgroundColor = window.getComputedStyle(canvas, null).getPropertyValue('background-color');
var canvasWidthFromCSS = window.getComputedStyle(canvas, null).getPropertyValue('width');
canvas.width = canvasWidthFromCSS.substring(0, canvasWidthFromCSS.length - 2);
var canvasHeightFromCSS = window.getComputedStyle(canvas, null).getPropertyValue('height');
canvas.height = canvasHeightFromCSS.substring(0, canvasHeightFromCSS.length - 2);
var pi = Math.PI;
var tau = 2 * pi

function Planet() {
  this.x;
  this.y;
  this.radius;
  this.distance;
  this.angle = random(0, tau);
  this.speed;
  this.planets = [];
}

Planet.prototype.spawnPlanets = function(num) {
  for (i = 0; i < num; i++) {
    this.planets[i] = new Planet;
    console.log(this.planets[i].angle);
  }
};

function random(min, max) {
  return Math.floor((Math.random() * max) + min);
}

function pointOnCircle(centerX, centerY, radius, angle) {
  var x = centerX + radius * Math.cos(angle);
  var y = centerY + radius * Math.sin(angle);
  return {
    x : x,
    y : y
  };
}

function clearFrameWithMotionBlur() {
  ctx.globalAlpha = backgroundOpacity;
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = 1;
}

function draw() {
  
}

function setup() {
  setInterval(draw, 10);
}

setup();