class Board {
  constructor() {
    this.snakes = { 36: 19, 65: 35, 87: 32, 97: 21 };
    this.ladders = { 7: 33, 37: 85, 51: 72, 62: 98 };
  }

  checkSpecialSquare(position) {
    if (this.snakes[position]) return { newPos: this.snakes[position], type: 'snake' };
    if (this.ladders[position]) return { newPos: this.ladders[position], type: 'ladder' };
    return { newPos: position, type: null };
  }
}

module.exports = Board;
