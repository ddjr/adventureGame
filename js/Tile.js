// const WORLD_ROAD = 0;
// const WORLD_WALL = 1;
// const WORLD_PLAYER_START = 2;
// const WORLD_FILL = 3;
// const WORLD_TREE = 4;
// const WORLD_CRACK = 5;
// const WORLD_KEY = 6;
// const WORLD_DOOR = 7;
// const WORLD_GOAL = 8;
var worldTiles =[
  {tileType: WORLD_ROAD, tileHandler: tileGroundHandling },
  {tileType: WORLD_WALL, tileHandler: tileGroundHandling },
  {tileType: WORLD_PLAYER_START, tileHandler: tileGroundHandling},
  {tileType: WORLD_FILL, tileHandler: tileGroundHandling },
  {tileType: WORLD_TREE, tileHandler: tileWallHandling},
  {tileType: WORLD_CRACK, tileHandler: tileGroundHandling},
  {tileType: WORLD_KEY, tileHandler: tileKeyHandling},
  {tileType: WORLD_DOOR, tileHandler: tileDoorHandling},
  {tileType: WORLD_GOAL, tileHandler: tileGoalhandling},
  {tileType: WORLD_WATER, tileHandler: tileWaterhandling},
  {tileType: WORLD_ORB, tileHandler: tileOrbhandling}
];
function isTileTransparent(tileType) {
  if(tileType == WORLD_KEY ||
     tileType == WORLD_TREE ||
     tileType == WORLD_GOAL ||
     tileType == WORLD_ORB) {
    return true;
  }
  return false;
}
function tileKeyHandling(character,currentIndex) {
  character.keys ++;
  character.score += 100;
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
    character.score += 50;
    console.log("you have " + character.keys + " keys!");
  } else {
    tileWallHandling(character,currentIndex);
  }
}
function tileWaterhandling (character,currentIndex){
  if(character.canSwim) {
    tileGroundHandling(character,currentIndex);
  } else {
    tileWallHandling(character,currentIndex);
  }
}
function tileGoalhandling(character,currentIndex) {
  loadLevel(levels[0]);
}
function tileOrbhandling(character,currentIndex) {
  character.canSwim = true;
  worldGrid[currentIndex] = WORLD_ROAD;
  console.log("you can now swim!!");
}
