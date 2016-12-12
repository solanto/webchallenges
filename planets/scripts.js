var motionBlurAmount = 0.2;

var sun;

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

function Planet(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.distance = 0;
  this.angle = random(0, tau);
  this.speed = random(0.1, 0.3);
  this.color = "white";
  this.planets = [];
}

Planet.prototype.spawnPlanets = function(num) {
  for (i = 0; i < num; i++) {
    this.planets[i] = new Planet;
    this.planets[i].radius = random(0.4 * this.radius, 0.7 * this.radius);
    this.planets[i].distance = random(0.2 * this.distance, 0.5 * this.distance);
    
  }
};

Planet.prototype.update = function() {
  for (i = 0; i < this.planets.length; i++) {
    if (this.planets[i] !== null) {
      var point = pointOnCircle(this.x, this.y, this.planets[i].distance, this.planets[i].angle);
      this.planets[i].x = point.x;
    }
  }
};

Planet.prototype.updateChildren = function() {
  for (i = 0; i < this.planets.length; i++) {
    for (a = 0; a < this.planets[i].planets.length; a++) {
      this.planets[i].planets[a].update
      if (this.planets[i].planets[a] !== null) {
        this.planets[i].planets[a].updateChildren
      }
    }
  }
};

Planet.prototype.draw = function() {
  drawPlanet(this.x, this.y, this.radius, this.color);
};

Planet.prototype.drawChildren = function() {
  for (i = 0; i < this.planets.length; i++) {
    this.planets[i].draw
    if (this.planets[i] !== null) {
      this.planets[i].drawChildren
    }
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
  ctx.fillRect(-1 * canvas.width/2, -1 * canvas.height/2, canvas.width, canvas.height);
  ctx.globalAlpha = 0.5;
}

function drawPlanet(x, y, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, tau);
  ctx.fill();
}

function updatePlanets() {
  sun.updateChildren();
}

function drawPlanets() {
  sun.draw();
  sun.drawChildren();
}

function draw() {
  clearFrameWithMotionBlur();
  updatePlanets();
  drawPlanets();
}

function setup() {
  ctx.translate(canvas.width / 2, canvas.height / 2);
  sun = new Planet(0, 0, 50);
  sun.spawnPlanets(4);
  sun.planets[0].spawnPlanets(2);
  sun.planets[1].spawnPlanets(1);
  setInterval(draw, 10);
}

setup();