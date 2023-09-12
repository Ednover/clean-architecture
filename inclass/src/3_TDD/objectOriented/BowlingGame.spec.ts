import { BowlingGame } from "./BowlingGame";

describe('Test bowling game', () => {
  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame();
  });

  it('can throw a ball', () => {
    game.roll(0);
    expect(game).toBeDefined();
  });

  it('should calculate score with all zero', () => {
    rollMany(game, 20, 0);
    expect(game.score()).toBe(0);
  });

  it('should calculate score with all one', () => {
    rollMany(game, 20, 1);
    expect(game.score()).toBe(20);
  });

  it('can roll a spare', () => {
    rollSpare(game);
    game.roll(3);
    rollMany(game, 17, 0);
    expect(game.score()).toBe(16);
  });

  it('can roll a strike', () => {
    rollStrike(game);
    game.roll(2);
    game.roll(2);
    rollMany(game, 16, 0);
    expect(game.score()).toBe(18);
  });

  it('roll a perfect game', () => {
    rollMany(game, 12, 10);
    expect(game.score()).toBe(300);
  });
});

function rollStrike(game: BowlingGame): void {
  game.roll(10);
}

function rollSpare(game: BowlingGame): void {
  game.roll(5);
  game.roll(5);
}

function rollMany(game: BowlingGame, rolls: number, pins: number): void {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }
}
