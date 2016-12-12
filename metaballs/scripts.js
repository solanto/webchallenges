var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvasWidthFromCSS = window.getComputedStyle(canvas, null).getPropertyValue('width');
canvas.width = canvasWidthFromCSS.substring(0, canvasWidthFromCSS.length - 2);
var canvasHeightFromCSS = window.getComputedStyle(canvas, null).getPropertyValue('height');
canvas.height = canvasHeightFromCSS.substring(0, canvasHeightFromCSS.length - 2);
var metaPoints = [];

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

function MetaPoint() {
  this.x = random(0, canvas.width);
  this.y = random(0, canvas.height);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function start() {
  metaPoints[1] = new MetaPoint;
  setInterval(draw, 10);
  canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    Mouse.x = mousePos.x;
    Mouse.y = mousePos.y;
  }, false);
}

start();