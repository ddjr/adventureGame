var canvas, canvasContext;
var player1 = new characterClass();

window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  colorRect(0,0,canvas.width, canvas.height, 'black');
  colorText("Loading ....",canvas.width/2 - 20, canvas.height/2 - 20, 'white');
  loadImages();
}

function imageLoadingDoneSoStartGame() {
  var framesPerSecond = 30;
  setInterval(updateAll, 1000/framesPerSecond);

  setupInput();
  loadLevel(levels[0]);
}
function loadLevel(level) {
  worldGrid = level.slice();
  player1.reset(characterSprite1, "Red Rock Racer");
}

function updateAll() {
  moveAll();
  drawAll();
}
function moveAll() {
  player1.move();
}
function drawAll() {
  drawWorlds();
  player1.draw();
  debug_DrawMouseCoord();
}