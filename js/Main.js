var canvas, canvasContext;
var player1 = new characterClass();
var npc1 = new npcClass();
var npc2 = new npcClass();
var npc3 = new npcClass();
var npc4 = new npcClass();

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
  player1.reset(characterSprite1, characterWaterSprite, "Red Rock Racer");
  npc1.reset(characterSprite1, characterWaterSprite, "Red Rock Racer");
  npc2.reset(characterSprite1, characterWaterSprite, "Red Rock Racer");
  npc3.reset(characterSprite1, characterWaterSprite, "Red Rock Racer");
  npc4.reset(characterSprite1, characterWaterSprite, "Red Rock Racer");
}

function updateAll() {
  moveAll();
  drawAll();
}
function moveAll() {
  npc1.move();
  npc2.move();
  npc3.move();
  npc4.move();
  player1.move();
}
function drawAll() {

  canvasContext.save();
  canvasContext.translate( -camPanX, -camPanY);

  drawOnlyTilesInView();
  //colorText("name: " + player1.name, camPanX ,camPanY+10, 'black');
  //colorText("Score: " + player1.score, camPanX,camPanY + 20, 'black');
  npc1.draw();
  npc2.draw();
  npc3.draw();
  npc4.draw();
  player1.draw();

  canvasContext.restore();

  debug_DrawMouseCoord();
}
