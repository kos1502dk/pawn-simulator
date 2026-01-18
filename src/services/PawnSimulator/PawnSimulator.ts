import { Board } from './entities/Board';
import { Pawn } from './entities/Pawn';
import { DIRECTION, type Direction, type PawnColor, Rotate, rotateDirection } from '@/src/types';

/**
 * Simulates the behavior of a pawn on a board, allowing placement, movement, rotation, and reporting.
 *
 * The PawnSimulator manages the state of the pawn and ensures all actions are valid within the board's constraints.
 */
export class PawnSimulator {
  private pawn: Pawn | null = null;
  private board: Board;

  constructor(boardSize: number = 8) {
    this.board = new Board(boardSize);
  }

  /**
   * Places the pawn on the board at the specified position, direction, and color.
   *
   * @param x The x-coordinate on the board.
   * @param y The y-coordinate on the board.
   * @param direction The direction the pawn is facing.
   * @param color The color of the pawn.
   */
  public place(x: number, y: number, direction: Direction, color: PawnColor): void {
    if (!this.board.isValidPosition(x, y)) {
      throw new Error(`Invalid position (${x}, ${y}) on the board.`);
    }

    this.pawn = new Pawn(x, y, direction, color);
  }

  /**
   * Moves the pawn forward by the specified number of steps.
   *
   * @param steps The number of steps to move the pawn forward. Defaults to 1 if not provided.
   */
  public move(steps: number = 1): void {
    if (!this.pawn) {
      throw new Error('Pawn is not placed on the board.');
    }

    const allowedSteps = this.pawn.hasPawnMoved() ? 1 : 2;

    if (steps > allowedSteps) {
      throw new Error(`Pawn can only move ${allowedSteps} step(s) forward. But ${steps} steps were requested.`);
    }

    let { x: newX, y: newY } = this.pawn.getPosition();
    const direction = this.pawn.getDirection();

    if (direction === DIRECTION.NORTH) {
      newY += steps;
    } else if (direction === DIRECTION.EAST) {
      newX += steps;
    } else if (direction === DIRECTION.SOUTH) {
      newY -= steps;
    } else if (direction === DIRECTION.WEST) {
      newX -= steps;
    }

    if (!this.board.isValidPosition(newX, newY)) {
      throw new Error(`Invalid move to position (${newX}, ${newY}) on the board.`);
    }

    this.pawn.setPosition(newX, newY);
  }

  /**
   * Rotates the pawn in the specified direction (LEFT or RIGHT).
   *
   * @param rotate The direction to rotate the pawn (LEFT or RIGHT).
   */
  rotate(rotate: Rotate): void {
    if (!this.pawn) {
      throw new Error('Pawn is not placed on the board.');
    }

    const currentDirection = this.pawn.getDirection();
    const newDirection = rotateDirection(currentDirection, rotate);

    this.pawn.setDirection(newDirection);
  }

  /**
   * Reports the current position, direction, and color of the pawn.
   *
   * @returns A string representing the pawn's state, or null if the pawn is not placed.
   */
  report(): string | null {
    if (!this.pawn) return null;
    return `${this.pawn.toString()}`;
  }
}
