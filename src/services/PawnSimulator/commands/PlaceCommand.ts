import { Command } from './AbstractCommand';
import { PawnSimulator } from '../PawnSimulator';
import { Direction, DIRECTION, PAWN_COLOR } from '../../../types/pawn-simulator-types';
import { PawnColor } from '../../../types/pawn-simulator-types';

export class PlaceCommand extends Command {
  constructor(
    private x: number,
    private y: number,
    private direction: Direction,
    private color: PawnColor
  ) {
    super();
  }

  execute(simulator: PawnSimulator): void {
    simulator.place(this.x, this.y, this.direction, this.color);
  }

  toString(): string {
    return `PLACE ${this.x},${this.y},${this.direction},${this.color}`;
  }

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
