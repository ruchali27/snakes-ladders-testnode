class Player {
  constructor() {
    this.position = 0;
  }

  move(steps, board) {
    if (this.position + steps > 100) {
      return { position: this.position, message: 'Move exceeds board limit' };
    }

    this.position += steps;
    const { newPos, type } = board.checkSpecialSquare(this.position);

    if (newPos !== this.position) {
      this.position = newPos;
      return { position: this.position, message: `Hit a ${type}!` };
    }

    if (this.position === 100) {
      return { position: 100, message: 'Yay!! You won!!' };
    }

    return { position: this.position, message: 'Moved normally' };
  }
}

module.exports = Player;
