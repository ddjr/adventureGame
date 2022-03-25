var LEVEL_EDITOR = false;
var debugMode = false;
const WORLD_BLOCK_SIZE = 50; // size in pixels
const MOVE_SPEED = 10;
var showGridLines = false;
const PLAYER_STARTING_COL = 3;
const PLAYER_STARTING_ROW = 3;
var HINTS_ON = true;

var LEVEL_PACK = TESTlevels;
var map_counter = 0;

const PLAYER_DIST_FROM_CENTER_BERFORE_CAMERA_PAN_X = 50;
const PLAYER_DIST_FROM_CENTER_BERFORE_CAMERA_PAN_Y = 50;
// Player 1 controls
const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

// Player 2 controls
const KEY_A = 65;
const KEY_W = 87;
const KEY_D = 68;
const KEY_S = 83;

var mouseX, mouseY;
var mouseheld = false;

if (LEVEL_EDITOR) {
  var editButtons = document.getElementsByClassName('levelEditor');
  for(i=0; i< editButtons.length; i++){
    editButtons[i].classList.add("show");
  }
  LEVEL_PACK = [baseLevel];
}

function setupInput() {
  canvas.addEventListener('mousemove', updateMousePos);
  canvas.addEventListener('mousedown', mouseClicked);
  canvas.addEventListener('mouseup', mouseReleased);
  document.addEventListener('keydown', keyPressed);
  document.addEventListener('keyup', keyReleased);

  player1.setupInput(KEY_UP_ARROW,KEY_RIGHT_ARROW,KEY_LEFT_ARROW,KEY_DOWN_ARROW);
  // player2.setupInput(KEY_W,KEY_D,KEY_A,KEY_S);
}
function mouseClicked(evt) {
  mouseheld = true;

}

function handleMouseClick() {
  var col = Math.floor(mouseX/WORLD_BLOCK_SIZE);
  var row = Math.floor(mouseY/WORLD_BLOCK_SIZE);
  if(isInbound(col,row)) {
    if(row == 0) {
      mouseClickedTileSelector(col, row);
    } else if(selectedIndex >= 0) {
      col += Math.floor((camPanX +WORLD_BLOCK_SIZE/2) /WORLD_BLOCK_SIZE);
      row += Math.floor((camPanY +WORLD_BLOCK_SIZE/2) /WORLD_BLOCK_SIZE) -1;
      worldGrid[row][col] = selectedTile;
    }
  }
}

function mouseReleased(evt) {
mouseheld = false;
}
function updateMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseY = evt.clientY - rect.top - root.scrollTop;
}

function ketSet(character, evt, setTo) {
  var keyCode = evt.keyCode;

  if(keyCode == character.controlKeyLeft) {
     character.keyHeld_Left = setTo;
  }
  if(keyCode == character.controlKeyRight) {
     character.keyHeld_Right = setTo;
  }
  if(keyCode == character.controlKeyUp) {
     character.keyHeld_Up = setTo;
  }
  if(keyCode == character.controlKeyDown) {
     character.keyHeld_Down = setTo;
  }
  evt.preventDefault();
}
function keyPressed(evt) {
  if(debugMode) {
    console.log("key pressed: " + evt.keyCode);
  }
  ketSet(player1,evt, true);
  //ketSet(player2,evt, true);
}
function keyReleased(evt) {
  ketSet(player1,evt, false);
  //ketSet(player2,evt, false);
}
