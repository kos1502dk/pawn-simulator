/**
 * Represents the game board for the Pawn Simulator.
 *
 * The board is a square grid of a specified size.
 */
export class Board {
  private size: number;

  constructor(size: number) {
    this.size = size;
  }

  /**
   * Checks if the given position is valid on the board.
   *
   * @param x The x-coordinate of the position.
   * @param y The y-coordinate of the position.
   * @returns True if the position is valid, false otherwise.
   */
  isValidPosition(x: number, y: number): boolean {
    return x >= 0 && x < this.size && y >= 0 && y < this.size;
  }
}
