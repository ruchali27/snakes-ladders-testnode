const boardSize = 100;
const player = { position: 0 };
const snakes = { 36: 19, 65: 35, 87: 32, 97: 21 };
const ladders = { 7: 33, 37: 85, 51: 72, 62: 98 };

// Create board
const boardEl = document.getElementById("board");

function createBoard() {
  for (let i = boardSize; i > 0; i--) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `cell-${i}`;

    const label = document.createElement("div");
    label.textContent = i;
    cell.appendChild(label);

    // Snake head
    if (snakes[i]) {
      const icon = document.createElement("div");
      icon.innerHTML = `🐍<br>→ ${snakes[i]}`;
      icon.style.fontSize = "12px";
      cell.appendChild(icon);
      cell.classList.add("snake");
    }

    // Snake tail
    if (Object.values(snakes).includes(i)) {
      cell.classList.add("snake-tail");
      const icon = document.createElement("div");
      icon.textContent = "🐍 tail";
      icon.style.fontSize = "10px";
      icon.style.color = "#a00";
      cell.appendChild(icon);
    }

    // Ladder foot
    if (ladders[i]) {
      const icon = document.createElement("div");
      icon.innerHTML = `🪜<br>↑ ${ladders[i]}`;
      icon.style.fontSize = "12px";
      cell.appendChild(icon);
      cell.classList.add("ladder");
    }

    // Ladder top
    if (Object.values(ladders).includes(i)) {
      cell.classList.add("ladder-top");
      const icon = document.createElement("div");
      icon.textContent = "🪜 top";
      icon.style.fontSize = "10px";
      icon.style.color = "green";
      cell.appendChild(icon);
    }

    boardEl.appendChild(cell);
  }
}



function updatePlayerPosition() {
  // Clear old position
  document.querySelectorAll(".cell").forEach((cell) => cell.classList.remove("player"));

  if (player.position > 0 && player.position <= 100) {
    const cell = document.getElementById(`cell-${player.position}`);
    if (cell) cell.classList.add("player");
  }

  document.getElementById("status").textContent = `Position: ${player.position}`;
}

function rollDice() {
  if (player.position === 100) return;

  const dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice").textContent = `🎲 Dice: ${dice}`;

  let newPos = player.position + dice;
  if (newPos > 100) {
    newPos = player.position;
  } else {
    if (snakes[newPos]) {
      alert(`🐍 Oops! Snake from ${newPos} to ${snakes[newPos]}`);
      newPos = snakes[newPos];
    } else if (ladders[newPos]) {
      alert(`🪜 Great! Ladder from ${newPos} to ${ladders[newPos]}`);
      newPos = ladders[newPos];
    }
  }

  player.position = newPos;
  updatePlayerPosition();

  if (player.position === 100) {
    alert("🎉 Yay! You won the game!");
  }
}

createBoard();
updatePlayerPosition();
