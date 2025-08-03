const Board = require('./board');
const Player = require('./player');

class Game {
  constructor() {
    this.board = new Board();
    this.player = new Player();
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  playTurn(diceValue) {
    return this.player.move(diceValue, this.board);
  }
}

module.exports = Game;
