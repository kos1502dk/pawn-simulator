import logger from '@/src/utils/logger';
import { Board } from './entities/Board';
import { Pawn } from './entities/Pawn';
import { DIRECTION, Direction, PawnColor, Rotate, rotateDirection } from '../../types/pawn-simulator-types';

export class PawnSimulator {
  private pawn: Pawn | null = null;
  private board: Board;

  constructor() {
    this.board = new Board(8);
  }

  public place(x: number, y: number, direction: Direction, color: PawnColor): void {
    if (!this.board.isValidPosition(x, y)) {
      throw new Error(`Invalid position (${x}, ${y}) on the board.`);
    }

    this.pawn = new Pawn(x, y, direction, color);

    logger.debug(`Pawn placed at (${x}, ${y}) facing ${direction} with color ${color}`);
  }

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

    logger.debug(`Pawn moved to (${newX}, ${newY})`);
  }

  rotate(rotate: Rotate): void {
    if (!this.pawn) {
      throw new Error('Pawn is not placed on the board.');
    }

    const currentDirection = this.pawn.getDirection();
    const newDirection = rotateDirection(currentDirection, rotate);

    this.pawn.setDirection(newDirection);

    logger.debug(`Pawn rotated to face ${newDirection}`);
  }

  report(): string | null {
    if (!this.pawn) return null;
    return `${this.pawn.toString()}`;
  }
}
