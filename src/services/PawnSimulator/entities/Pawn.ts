import { DIRECTION, Direction, PAWN_COLOR, PawnColor } from '../../../types/pawn-simulator-types';

export class Pawn {
  private x: number;
  private y: number;
  private direction: Direction;
  private color: PawnColor;

  private hasMoved: boolean = false;

  constructor(x: number, y: number, direction: Direction = DIRECTION.NORTH, color: PawnColor = PAWN_COLOR.WHITE) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.color = color;
  }

  getPosition(): {
    x: number;
    y: number;
  } {
    return {
      x: this.x,
      y: this.y,
    };
  }

  setPosition(x: number, y: number): void {
    this.x = x;
    this.y = y;

    // Mark that the pawn has moved at least once
    // so only the first move can be two squares forward
    this.hasMoved = true;
  }

  hasPawnMoved(): boolean {
    return this.hasMoved;
  }

  setDirection(direction: Direction): void {
    this.direction = direction;
  }

  getDirection(): Direction {
    return this.direction;
  }

  setColor(color: PawnColor): void {
    this.color = color;
  }

  getColor(): PawnColor {
    return this.color;
  }

  toString(): string {
    return `${this.x},${this.y},${this.direction},${this.color}`;
  }
}
