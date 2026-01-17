export class Board {
  private size: number;

  constructor(size: number) {
    this.size = size;
  }

  isValidPosition(x: number, y: number): boolean {
    return x >= 0 && x < this.size && y >= 0 && y < this.size;
  }
}
