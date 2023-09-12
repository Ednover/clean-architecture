export class BowlingGame {
  private pins: number[];

  constructor() {
    this.pins = [];
  }

  roll(pins: number): void {
    this.pins.push(pins);
  }

  score(): number {
    const FRAMES = 10;
    let totalScore = 0;
    let firstRoll = 0;

    for (let frame = 0; frame < FRAMES; frame++) {
      if (this.isStrike(firstRoll)) {
        totalScore += this.scoreForStrike(firstRoll);
        firstRoll += 1;
      } else if (this.isSpare(firstRoll)) {
        totalScore += this.scoreForSpare(firstRoll);
        firstRoll += 2;
      } else {
        totalScore += this.scoreForFrame(firstRoll);
        firstRoll += 2;
      }
    }

    return totalScore;
  }

  private isStrike(firstRoll: number): boolean {
    return this.pins[firstRoll] === 10;
  }

  private scoreForStrike(firstRoll: number): number {
    return 10 + this.pins[firstRoll + 1] + this.pins[firstRoll + 2];
  }

  private scoreForFrame(firstRoll: number): number {
    return this.pins[firstRoll] + this.pins[firstRoll + 1];
  }

  private isSpare(firstRoll: number): boolean {
    return this.pins[firstRoll] + this.pins[firstRoll + 1] === 10;
  }

  private scoreForSpare(firstRoll: number): number {
    return 10 + this.pins[firstRoll + 2];
  }
}

export default BowlingGame;
