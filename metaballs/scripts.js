var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvasWidthFromCSS = window.getComputedStyle(canvas, null).getPropertyValue('width');
canvas.width = canvasWidthFromCSS.substring(0, canvasWidthFromCSS.length - 2);
var canvasHeightFromCSS = window.getComputedStyle(canvas, null).getPropertyValue('height');
canvas.height = canvasHeightFromCSS.substring(0, canvasHeightFromCSS.length - 2);
var metaPoints = [];
var pi = Math.PI;
var tau = 2 * pi;
var quadraticPoints = [];
quadraticPoints[1] = new pointArray;
quadraticPoints[2] = new pointArray;
quadraticPoints[3] = new pointArray;

function pointArray () {
  this.x
  this.y
}

function Mouse() {
  this.x;
  this.y;
}

function random(min, max) {
  return Math.floor((Math.random() * max) + min);
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
    Mouse.x = mousePos.x;
    Mouse.y = mousePos.y;
  }, false);
}

function drawCircle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, tau);
  ctx.stroke();
  ctx.fill();
}

function drawQuadraticCurve(array) {
  ctx.moveTo(array[0].x, array[0].y);
  for (i = 1; i < array.length - 2; i ++) {
    var xc = (array[i].x + array[i + 1].x) / 2;
    var yc = (array[i].y + array[i + 1].y) / 2;
    ctx.quadraticCurveTo(array[i].x, array[i].y, xc, yc);
   }
   ctx.quadraticCurveTo(array[i].x, array[i].y, array[i+1].x, array[i+1].y);
}

function MetaPoint() {
  this.x = Mouse.x;
  this.y = Mouse.y;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  metaPoints[1].x = Mouse.x
  metaPoints[1].y = Mouse.y
  drawCircle(metaPoints[1].x, metaPoints[1].y, 10);
  
}

function start() {
  metaPoints[1] = new MetaPoint;
  listenForMouseMove();
  setInterval(draw, 10);
}

start();