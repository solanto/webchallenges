var metaBallSize = 100;
metaPoints[1].x = 100;
metaPoints[1].y = 100;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvasWidthFromCSS = window.getComputedStyle(canvas, null).getPropertyValue('width');
canvas.width = canvasWidthFromCSS.substring(0, canvasWidthFromCSS.length - 2);
var canvasHeightFromCSS = window.getComputedStyle(canvas, null).getPropertyValue('height');
canvas.height = canvasHeightFromCSS.substring(0, canvasHeightFromCSS.length - 2);
var metaPoints = [];
var pi = Math.PI;
var tau = 2 * pi;
var mouse = new Point;
metaPoints[0] = new Point;
metaPoints[1] = new Point;

function Point () {
  this.x
  this.y
}

function random(min, max) {
  return Math.floor((Math.random() * max) + min);
}

function distanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(), root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
      x: mouseX,
      y: mouseY
    };
}

function listenForMouseMove() {
  canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    mouse.x = mousePos.x;
    mouse.y = mousePos.y;
  }, false);
}

function drawCircle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, tau);
  ctx.stroke();
  ctx.fill();
}

function taperBetweenCircles() {
  for (i = 0; i < metaPoints.length; i++) {
    for (a = 0; a < metaPoints.length; a++) {
      if (a !== i) {
        
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  metaPoints[0].x = mouse.x
  metaPoints[0].y = mouse.y
  for (i = 0; i < metaPoints.length; i++) {
    drawCircle(metaPoints[i].x, metaPoints[i].y, metaBallSize);
  }
}

function start() {
  listenForMouseMove();
  setInterval(draw, 10);
}

start();