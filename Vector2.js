var Vector2 = function (x, y) {
    this.x = 0;
    this.y = 0;

    x = this.x;
    y = this.y;
}


//set--------------------------------------------
Vector2.prototype.set = function (x, y){
    var newVector = new Vector2();
    this.x = x * 32;
    this.y = y * 32;
}