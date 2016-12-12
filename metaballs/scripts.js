var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvasWidthFromCSS = window.getComputedStyle(canvas, null).getPropertyValue('width');
canvas.width = canvasWidthFromCSS.substring(0, canvasWidthFromCSS.length - 2);
var canvasHeightFromCSS = window.getComputedStyle(canvas, null).getPropertyValue('height');
canvas.height = canvasHeightFromCSS.substring(0, canvasHeightFromCSS.length - 2);
var pixels = []
var metaPoints

function random(min, max) {
  return Math.floor((Math.random() * max) + min);
}

function Pixel() {
  function Color() {
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
  }
}

function makePixels() {
  for(x = 0; x < canvas.width; x++){
    for(y = 0; y < canvas.height; y++){
      pixels[x + y * canvas.width] = new Pixel;
    }
  }
}

function setPixelColor(x, y, r, g, b) {
  pixels[x + y * canvas.width].Color.r = r;
  pixels[x + y * canvas.width].Color.g = g;
  pixels[x + y * canvas.width].Color.b = b;
}

function drawPixel(x, y) {
  ctx.fillStyle = "rgb(" + pixels[x + y * canvas.width].Color.r + ", " + pixels[x + y * canvas.width].Color.g + ", " + pixels[x + y * canvas.width].Color.b + ")"
  ctx.fillRect(x, y, 1, 1);
}

function MetaPoint() {
  this.x = random(0, canvas.width);
  this.y = random(0, canvas.height);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(x = 0; x < canvas.width; x++){
    for(y = 0; y < canvas.height; y++){
      drawPixel(x, y);
    }
  }
}

function start() {
  makePixels();
  setInterval(draw, 100/3);
  var metaPoints
}

start();