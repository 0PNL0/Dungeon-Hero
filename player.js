var playerImg = document.createElement("img");
playerImg.src = "hero basic.png";


var Player = function() {
    this.playerIMG = playerImg;
    
    this.position = new Vector2();
    this.position.set(3, 3);
    
    this.move = false;
    
};




//draw player------------------------------------
Player.prototype.draw = function(worldOffsetX, worldOffsetY){

    drawImage(this.playerIMG, this.position.x - worldOffsetX, this.position.y - worldOffsetY);
    
}


//update=============================================================
Player.prototype.update = function(deltaTime){


//move---------------------------------------
    if (this.move == false){
        if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true) {
            this.position.y - 32;
            this.move = true;
        }
        
        
        if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true) {
            this.position.y + 32;
            this.move = true;
        }
        
        
        if(keyboard.isKeyDown(keyboard.KEY_UP) == true) {
            this.position.x + 32;
            this.move = true;
        }
        
        
        if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true) {
            this.position.x - 32;
            this.move = true;
        }


    }

    // new position calculations-----------------
    this.position.y = Math.floor(this.position.y + (deltaTime * this.velocity.y));
    this.position.x = Math.floor(this.position.x + (deltaTime * this.velocity.x));
    this.velocity.x = bound(this.velocity.x + (deltaTime * ddx), -MAXDX, MAXDX);
    this.velocity.y = bound(this.velocity.y + (deltaTime * ddy), -MAXDY, MAXDY);
    
    if ((wasleft && (this.velocity.x > 0)) || (wasright && (this.velocity.x < 0))){
        this.velocity.x = 0;
    }

    
    
//collision detection----------------------------
    var tx = pixelToTile(this.position.x);
    var ty = pixelToTile(this.position.y);
    var nx = (this.position.x)%TILE;
    var ny = (this.position.y)%TILE;
    var cell = cellAtTileCoord(LAYER_PLATFORMS, tx, ty);
    var cellright = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty);
    var celldown = cellAtTileCoord(LAYER_PLATFORMS, tx, ty + 1);
    var celldiag = cellAtTileCoord(LAYER_PLATFORMS, tx + 1, ty + 1);
    
    if (this.velocity.y > 0) {
        if ((celldown && !cell) || (celldiag && !cellright && nx)) {
            this.position.y = tileToPixel(ty);
            this.velocity.y = 0;
            this.falling = false;
            this.jumping = false;
            ny = 0;
        }
    }
    
    else if (this.velocity.y < 0) {
        if ((cell && !celldown) || (cellright && !celldiag && nx)) {
            this.position.y = tileToPixel(ty + 1);
            this.velocity.y = 0;
            cell = celldown;
            cellright = celldiag;
            ny = 0;
        }
    }
        if (this.velocity.x > 0) {
            if ((cellright && !cell) || (celldiag && !celldown && ny)) {
                this.position.x = tileToPixel(tx);
                this.velocity.x = 0;
            }
        }
        else if (this.velocity.x < 0) {
        if ((cell && !cellright) || (celldown && !celldiag && ny)) {
            this.position.x = tileToPixel(tx + 1);
            this.velocity.x = 0;
        }
    }
}