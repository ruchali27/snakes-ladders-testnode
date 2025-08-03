const Player = require('../src/player');
const Board = require('../src/board');

test('Player hits a snake', () => {
  const board = new Board();
  const player = new Player();
  player.position = 36;
  const result = player.move(0, board);
  expect(result.position).toBe(19);
  expect(result.message).toBe('Hit a snake!');
});

test('Player hits a ladder', () => {
  const board = new Board();
  const player = new Player();
  player.position = 7;
  const result = player.move(0, board);
  expect(result.position).toBe(33);
  expect(result.message).toBe('Hit a ladder!');
});

test('Move exceeds 100', () => {
  const board = new Board();
  const player = new Player();
  player.position = 98;
  const result = player.move(5, board);
  expect(result.position).toBe(98);
  expect(result.message).toBe('Move exceeds board limit');
});
