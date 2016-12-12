var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvasWidthFromCSS = window.getComputedStyle(canvas, null).getPropertyValue('width');
canvas.width = canvasWidthFromCSS.substring(0, canvasWidthFromCSS.length - 2);
var canvasHeightFromCSS = window.getComputedStyle(canvas, null).getPropertyValue('height');
canvas.height = canvasHeightFromCSS.substring(0, canvasHeightFromCSS.length - 2);
var metaPoints = [];

function MetaPoint() {
  this.x = random(0, canvas.width);
  this.y = random(0, canvas.height);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function start() {
  var metaPoints[1] = new MetaPoint;
  setInterval(draw, 10);
}

start();