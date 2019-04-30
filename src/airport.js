function Airport(){
    this._hangar = [];
};

Airport.prototype.land = function(plane) {
     this._hangar.push(plane);
};