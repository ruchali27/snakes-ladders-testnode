const readline = require('readline');
const Game = require('./game');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const game = new Game();

console.log("🎲 Welcome to Snakes & Ladders!");

function play() {
  rl.question("Roll the dice? (y/n): ", (answer) => {
    if (answer.toLowerCase() !== 'y') {
      rl.close();
      return;
    }

    const dice = game.rollDice();
    console.log(`Dice rolled: ${dice}`);
    const { position, message } = game.playTurn(dice);
    console.log(`Current Position: ${position} | ${message}`);

    if (position === 100) {
      rl.close();
    } else {
      play();
    }
  });
}

play();
