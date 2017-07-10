const MOVE_SPEED = 5;

function characterClass() {
  this.x = 75;
  this.y = 75;
  this.hitBox = 15;
  this.score = 0;
  this.canSwim = false;
  this.sprite; // Character picture displayed
  this.name = "Untitled Character";
  this.lastLocation; // Characters last position
  this.keys = 0; // Keys that unlock doors

  this.keyHeld_Up = false;
  this.keyHeld_Down = false;
  this.keyHeld_Left = false;
  this.keyHeld_Right = false;

  this.controlKeyUp;
  this.controlKeyRight;
  this.controlKeyDown;
  this.controlKeyLeft;

  this.setupInput = function(upKey, rightKey, leftKey, downKey) {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;

  }

  this.reset = function(image, name) {
  this.sprite = image;
  this.name = name;
  this.speed = 0;
  this.keys = 0;
    for(var eachRow=0; eachRow<WORLD_ROWS; eachRow++) {
      for(var eachCol=0; eachCol<WORLD_COLS; eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if(worldGrid[arrayIndex] == WORLD_PLAYER_START) {
          worldGrid[arrayIndex] = WORLD_ROAD;
          this.ang = -Math.PI/2;
          this.x = eachCol * WORLD_BLOCK_SIZE + WORLD_BLOCK_SIZE/2;
          this.y = eachRow * WORLD_BLOCK_SIZE + WORLD_BLOCK_SIZE/2;
          this.lastLocation = { x:this.x, y:this.y };
          return;
        } // end of if start location
      } // end of for eachCol world
    } // end of for eachRow
    console.log("NO PLAYER START FOUND FOR CAR " + this.name);
  } // end  this.reset

  this.move = function() {
    if(this.keyHeld_Up) {
      this.y -= MOVE_SPEED;
    }
    if(this.keyHeld_Down) {
      this.y += MOVE_SPEED;
    }
    if(this.keyHeld_Left){
      this.x -= MOVE_SPEED;
    }
    if(this.keyHeld_Right) {
      this.x += MOVE_SPEED;
    }
    characterWorldHanding(this);
    this.lastLocation = { x:this.x, y:this.y };// should come after characterWorldHanding()

  }

  this.draw = function() {
      drawBitMapRotation(this.sprite, this.x, this.y, this.ang);
  }
} // end of carClass
