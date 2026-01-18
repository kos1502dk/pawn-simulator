import { Command } from './AbstractCommand';
import { PawnSimulator } from '../PawnSimulator';
import { type Direction, DIRECTION, PAWN_COLOR } from '../../../types/pawn-simulator-types';
import { PawnColor } from '../../../types/pawn-simulator-types';

/**
 * Command to place the pawn at a specified position, direction, and color.
 *
 * The PLACE command requires four arguments: X coordinate, Y coordinate, direction, and color.
 * Example: PLACE 0,0,NORTH,RED
 */
export class PlaceCommand extends Command {
  constructor(
    private x: number,
    private y: number,
    private direction: Direction,
    private color: PawnColor
  ) {
    super();
  }

  /**
   * Executes the PLACE command on the given PawnSimulator instance.
   *
   * @param simulator The PawnSimulator instance to execute the command on.
   * @returns void
   */
  execute(simulator: PawnSimulator): void {
    simulator.place(this.x, this.y, this.direction, this.color);
  }

  /**
   * Returns a string representation of the PLACE command.
   *
   * @returns A string representing the PLACE command.
   */
  toString(): string {
    return `PLACE ${this.x},${this.y},${this.direction},${this.color}`;
  }

  /**
   * Factory method to create a PlaceCommand instance from arguments.
   *
   * @param args Optional Array of string arguments.
   * @returns A new instance of PlaceCommand.
   */
  static create(args?: string[]): PlaceCommand {
    if (!args || args.length !== 4) {
      throw new Error('Invalid number of arguments for PLACE command');
    }

    const x = parseInt(args[0], 10);
    const y = parseInt(args[1], 10);
    const direction = args[2] as Direction;
    const color = args[3] as PawnColor;

    if (
      isNaN(x) ||
      isNaN(y) ||
      !Object.values(DIRECTION).includes(direction) ||
      !Object.values(PAWN_COLOR).includes(color)
    ) {
      throw new Error('Invalid arguments for PLACE command');
    }

    return new PlaceCommand(x, y, direction, color);
  }
}
