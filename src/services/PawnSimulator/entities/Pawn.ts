import { DIRECTION, type Direction, PAWN_COLOR, type PawnColor } from '../../../types/pawn-simulator-types';

/**
 * Represents a pawn in the Pawn Simulator with position, direction, and color.
 *
 * The pawn can move, rotate, and change color during the simulation.
 */
export class Pawn {
  /**
   * The x-coordinate of the pawn's position.
   */
  private x: number;

  /**
   * The y-coordinate of the pawn's position.
   */
  private y: number;

  /**
   * The direction the pawn is facing.
   */
  private direction: Direction;

  /**
   * The color of the pawn.
   */
  private color: PawnColor;

  /**
   * Indicates whether the pawn has moved at least once.
   */
  private hasMoved: boolean = false;

  /**
   * Creates a new Pawn instance.
   *
   * @param x The x-coordinate of the pawn's position.
   * @param y The y-coordinate of the pawn's position.
   * @param direction The direction the pawn is facing.
   * @param color The color of the pawn.
   */
  constructor(x: number, y: number, direction: Direction = DIRECTION.NORTH, color: PawnColor = PAWN_COLOR.WHITE) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.color = color;
  }

  /**
   * Gets the current position of the pawn.
   *
   * @returns An object containing the x and y coordinates of the pawn.
   */
  getPosition(): {
    x: number;
    y: number;
  } {
    return {
      x: this.x,
      y: this.y,
    };
  }

  /**
   * Sets the position of the pawn.
   * @param x The new x-coordinate of the pawn.
   * @param y The new y-coordinate of the pawn.
   */
  setPosition(x: number, y: number): void {
    this.x = x;
    this.y = y;

    // Mark that the pawn has moved at least once
    // so only the first move can be two squares forward
    this.hasMoved = true;
  }

  /**
   * Checks if the pawn has moved at least once.
   * @returns True if the pawn has moved, false otherwise.
   */
  hasPawnMoved(): boolean {
    return this.hasMoved;
  }

  /**
   * Sets the direction the pawn is facing.
   *
   * @param direction The new direction of the pawn.
   */
  setDirection(direction: Direction): void {
    this.direction = direction;
  }

  /**
   * Gets the direction the pawn is facing.
   * @returns The current direction of the pawn.
   */
  getDirection(): Direction {
    return this.direction;
  }

  /**
   * Sets the color of the pawn.
   *
   * @param color The new color of the pawn.
   */
  setColor(color: PawnColor): void {
    this.color = color;
  }

  /**
   * Gets the color of the pawn.
   * @returns The current color of the pawn.
   */
  getColor(): PawnColor {
    return this.color;
  }

  /**
   * Returns a string representation of the pawn's state.
   *
   * @returns A string representing the pawn's position, direction, and color.
   */
  toString(): string {
    return `${this.x},${this.y},${this.direction},${this.color}`;
  }
}
