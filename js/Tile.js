var worldTiles = {};
  worldTiles[WORLD_ROAD] = tileGroundHandling;
  worldTiles[WORLD_WALL] = tileGroundHandling;
  worldTiles[WORLD_FILL] = tileGroundHandling;
  worldTiles[WORLD_CRACK] = tileGroundHandling;

  worldTiles[WORLD_TREE] = tileWallHandling;
  worldTiles[WORLD_DOOR] = tileDoorHandling;
  worldTiles[WORLD_GOAL] = tileGoalHandling;
  worldTiles[WORLD_WATER] = tileWaterHandling;
  worldTiles[WORLD_KEY] = tileKeyHandling;
  worldTiles[WORLD_ORB] = tileOrbHandling;
function writeHintText(text) {
  if(!HINTS_ON){ return }
  var h2 = document.createElement('h2');
  h2.appendChild(document.createTextNode(text));
  document.body.appendChild(h2);
}
function RemoveHintText() {
  var h2 = document.getElementsByTagName("h2");
  var length = h2.length;
  if(h2 == undefined) { return }
  for(i=0; i < length; i++) {
    h2[0].remove();
  }
}
function writeHeaderText(text) {
  var h1 = document.getElementsByTagName('h1');
  h1.text(text);
}


function isTileTransparent(tileType) {
  if(tileType == WORLD_KEY ||
     tileType == WORLD_TREE ||
     tileType == WORLD_GOAL ||
     tileType == WORLD_ORB) {
    return true;
  }
  return false;
}
function tileKeyHandling(character,characterWorldCol,characterWorldRow) {
  character.keys ++;
  character.score += 100;
  worldGrid[characterWorldRow][characterWorldCol] = WORLD_ROAD;
  writeHintText("You can open a door with that");
  console.log("you have " + character.keys + " keys!");
}
function tileWallHandling(character,characterWorldCol,characterWorldRow) {
  character.inWall = true;
}
function tileGroundHandling(character,characterWorldCol,characterWorldRow) {
  // character does not interact with the ground
}
function tileDoorHandling(character,characterWorldCol,characterWorldRow) { // <-- jokes are real
  if(character.keys > 0) {
    worldGrid[characterWorldRow][characterWorldCol] = WORLD_ROAD;
    character.keys -= 1;
    character.score += 50;
    console.log("you have " + character.keys + " keys!");
  } else {
    tileWallHandling(character,characterWorldCol,characterWorldRow);
  }
}
function tileWaterHandling (character,characterWorldCol,characterWorldRow){
  if(character.canSwim) {
    tileGroundHandling(character,characterWorldCol,characterWorldRow);
    character.onWater = true;
  } else {
    tileWallHandling(character,characterWorldCol,characterWorldRow);
  }
}
function tileGoalHandling(character,characterWorldCol,characterWorldRow) {
  map_counter++;
  RemoveHintText();
  if( map_counter  >= LEVEL_PACK.length ) {
    writeHintText("YOU WIN!!!");
    loadLevel(baseLevel);
  }
  loadLevel(LEVEL_PACK[map_counter]);
}
function tileOrbHandling(character,characterWorldCol,characterWorldRow) {
  character.canSwim = true;
  worldGrid[characterWorldRow][characterWorldCol] = WORLD_ROAD;
  writeHintText("You can now SWIM in Water");
  console.log("You can now SWIM in Water");
}
