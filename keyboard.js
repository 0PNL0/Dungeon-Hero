var Keyboard = function() {
    var self = this;
    window.addEventListener('keydown', function(evt) { self.onKeyDown(evt); }, false);
    window.addEventListener('keyup', function(evt) { self.onKeyUp(evt); }, false);
    this.keyListeners = new Array();
    this.keys = new Array();
    
    this.KEY_LEFT = 37;
    this.KEY_UP = 38;
    this.KEY_RIGHT = 39;
    this.KEY_DOWN = 40;
    
    
//armour-----------------------------------------
    this.KEY_ONE = 49;
    this.KEY_TWO = 50;
    this.KEY_THREE = 51;
    this.KEY_FOUR = 52;
    this.KEY_FIVE = 53;
    this.KEY_SIX = 54;
    this.KEY_SEVEN = 55;
    this.KEY_EIGHT = 56;
    this.KEY_NINE = 57;
    
    
//defence----------------------------------------
    this.Q = 81;
    this.W = 87;
    this.E = 69;
    this.R = 82;
    this.T = 84;
    this.Y = 89;
    this.U = 85;
    this.I = 73;
    this.KEY_SPACE = 32;

// Game State
this.KEY_ENTER = 13;

};

Keyboard.prototype.onKeyDown = function(evt) {
this.keys[evt.keyCode] = true;
};


Keyboard.prototype.onKeyUp = function(evt) {
this.keys[evt.keyCode] = false;
};


Keyboard.prototype.isKeyDown = function(keyCode){
return this.keys[keyCode];
};