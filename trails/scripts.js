var motionBlurAmount = 0;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
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

function clearFrameWithMotionBlur() {
  ctx.globalAlpha = backgroundOpacity;
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function start() {
  
}

start();