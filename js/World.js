const WORLD_BLOCK_SIZE = 50; // size in pixels
const WORLD_COLS = 16;
const WORLD_ROWS = 12;

var worldGrid = [];
var worldTiles =[
  {tileType: WORLD_ROAD, tileHandler: tileGroundHandling },
  {tileType: WORLD_WALL, tileHandler: tileGroundHandling },
  {tileType: WORLD_PLAYER_START, tileHandler: tileGroundHandling},
  {tileType: WORLD_FILL, tileHandler: tileGroundHandling },
  {tileType: WORLD_TREE, tileHandler: tileWallHandling},
  {tileType: WORLD_CRACK, tileHandler: tileGroundHandling},
  {tileType: WORLD_KEY, tileHandler: tileKeyHandling},
  {tileType: WORLD_DOOR, tileHandler: tileDoorHandling},
  {tileType: WORLD_GOAL, tileHandler: tileGoalhandling}
];


function returnTileTypeAtColRow(col,row) {
  if(col >= 0 && col < WORLD_COLS && // is character within the left and right bounds of the worldGrid
     row >= 0 && row < WORLD_ROWS) { // is character within the top and bottom bounds of the worldGrid
    var worldIndexUnderCoord = rowColToArrayIndex(col, row);
    return worldGrid[worldIndexUnderCoord];
  } else {
    return WORLD_BLOCK_WALL;
  }
}
function isTileAWall(tileType){
  if(tileType == WORLD_TREE ||
     tileType == WORLD_DOOR) {
    return true;
  }
  return false;
}
function pushPlayerToLastLocation(character) {
  character.x = character.lastLocation.x;
  character.y = character.lastLocation.y;
}
function characterTileHandling(characterWorldCol, characterWorldRow, character) {
  var tileHere = returnTileTypeAtColRow(characterWorldCol,characterWorldRow);
  var currentIndex = rowColToArrayIndex(characterWorldCol,characterWorldRow);

  worldTiles[tileHere].tileHandler(character, currentIndex);
}
function tileKeyHandling(character,currentIndex) {
  character.keys += 1;
  worldGrid[currentIndex] = WORLD_ROAD;
  console.log("you have " + character.keys + " keys!");
}
function tileWallHandling(character,currentIndex) {
  pushPlayerToLastLocation(character);
}
function tileGroundHandling(character,currentIndex) {
  // character does not interact with the ground
}
function tileDoorHandling(character,currentIndex) { // <-- jokes are real
  if(character.keys > 0) {
    worldGrid[currentIndex] = WORLD_ROAD;
    character.keys -= 1;
    console.log("you have " + character.keys + " keys!");
  } else {
    tileWallHandling(character,currentIndex);
  }
}
function tileGoalhandling(character,currentIndex) {
  loadLevel(levels[0]);
}
function characterWorldHanding(character) {
  var characterWorldCol = Math.floor(character.x / WORLD_BLOCK_SIZE);
  var characterWorldRow = Math.floor(character.y / WORLD_BLOCK_SIZE);

  if(characterWorldCol >= 0 && characterWorldCol < WORLD_COLS && // is character within the left and right bounds of the worldGrid
     characterWorldRow >= 0 && characterWorldRow < WORLD_ROWS) { // is character within the top and bottom bounds of the worldGrid
    characterTileHandling(characterWorldCol, characterWorldRow,character);
  } else {
    pushPlayerToLastLocation(character);
  }// end of if in bounds of worldGrid
} // end of characterWorldHanding


function rowColToArrayIndex(col, row) {
  return  col + WORLD_COLS * row;
}

function isTitleTransparent(tileType) {
  if(tileType == WORLD_KEY ||
     tileType == WORLD_TREE ||
     tileType == WORLD_GOAL ) {
    return true;
  }
  return false;
}
function drawWorlds() {
  var arrayIndex = 0;
  var drawTitleX = 0;
  var drawTitleY = 0;
  for(var eachRow=0; eachRow<WORLD_ROWS; eachRow++) {
    for(var eachCol=0; eachCol<WORLD_COLS; eachCol++) {
      var tileKindHere = worldGrid[arrayIndex];
      var useImg = worldPics[tileKindHere];
      if(isTitleTransparent(tileKindHere)) {
        canvasContext.drawImage(worldPics[WORLD_ROAD], drawTitleX, drawTitleY);
      }
      canvasContext.drawImage(useImg, drawTitleX, drawTitleY);

      arrayIndex ++;
      drawTitleX += WORLD_BLOCK_SIZE;
    } // end of for eachCol world
    drawTitleX = 0;
    drawTitleY += WORLD_BLOCK_SIZE;
  } // end of for eachRow
} // end of drawWorlds()
