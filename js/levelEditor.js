var selectedTile = -1;
var selectedIndex = -1;
const LEVEL_EDITOR_HEIGHT = WORLD_BLOCK_SIZE;
function drawTileSelector() {
  colorRect(0,0, canvas.width, WORLD_BLOCK_SIZE, "black");
  for(var i =0; i*WORLD_BLOCK_SIZE < canvas.width; i++) {
    //console.log(i);
    if(worldPics[i] != undefined){
        if(isTileTransparent(i)) {
          canvasContext.drawImage(worldPics[WORLD_ROAD], i*WORLD_BLOCK_SIZE, 0);
        }
        canvasContext.drawImage(worldPics[i], i*WORLD_BLOCK_SIZE, 0);
    }

  }


  outlineRect(0,0, canvas.width, WORLD_BLOCK_SIZE, "black");
}
function drawMouseHover() {
  var col = Math.floor(mouseX/WORLD_BLOCK_SIZE) + Math.floor((camPanX +WORLD_BLOCK_SIZE/2 ) /WORLD_BLOCK_SIZE);
  var row = Math.floor(mouseY/WORLD_BLOCK_SIZE) + Math.floor((camPanY +WORLD_BLOCK_SIZE/2)/WORLD_BLOCK_SIZE) -1;
  if( isInbound(col, row)) {
      outlineRect(col* WORLD_BLOCK_SIZE, row* WORLD_BLOCK_SIZE,
               WORLD_BLOCK_SIZE , WORLD_BLOCK_SIZE , 'green' );
    }
}
function drawMouseHoverTileSelector() {
  var col = Math.floor(mouseX/WORLD_BLOCK_SIZE);
  var row = Math.floor(mouseY/WORLD_BLOCK_SIZE);
  if( isInbound(col, row)) {
    if (mouseY < WORLD_BLOCK_SIZE) {
      outlineRect(col* WORLD_BLOCK_SIZE, row* WORLD_BLOCK_SIZE,
               WORLD_BLOCK_SIZE , WORLD_BLOCK_SIZE , 'blue' );
    }
  }
  if (selectedIndex >= 0 && selectedIndex*WORLD_BLOCK_SIZE < canvas.width) {
    outlineRect(selectedIndex * WORLD_BLOCK_SIZE, 0,
             WORLD_BLOCK_SIZE -3, WORLD_BLOCK_SIZE -3, 'yellow' );
  }
}
function mouseClickedTileSelector(col,row) {
  selectedTile = col;
  selectedIndex = col;
  console.log("selectedtile: " + selectedTile);

}
function printLevel() {
  console.log("var level = " + JSON.stringify(worldGrid) + ";");
  //console.log("var level = [" + worldGrid + "];");
}

function addRow() {
  worldGrid.push(worldGrid[[worldGrid.length - 1]].slice());
}
function addCol() {
  for(var i =0; i < worldGrid.length; i++) {
    worldGrid[i].push( worldGrid[i][worldGrid[i].length - 1] );
  }
}
function removeRow() {
  worldGrid.pop(worldGrid[[worldGrid.length - 1]]);
}
function removeCol() {
  for(var i =0; i < worldGrid.length; i++) {
    worldGrid[i].pop(worldGrid[i][worldGrid[i].length - 1]);
  }
}
