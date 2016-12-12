var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvasWidthFromCSS = window.getComputedStyle(canvas, null).getPropertyValue('width');
canvas.width = canvasWidthFromCSS.substring(0, canvasWidthFromCSS.length - 2);
var canvasHeightFromCSS = window.getComputedStyle(canvas, null).getPropertyValue('height');
canvas.height = canvasHeightFromCSS.substring(0, canvasHeightFromCSS.length - 2);
var pixels = []

function Pixel() {
  this.x = x
  this.y = y
  this.color = rgb(255, 255, 255)
}

function makePixels() {
  for(x = 0; x < width; x++){
    for(y = 0; y < width; y++){
      
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function start() {
  makePixels();
  setInterval(draw, 10);
}

start();