import { Command } from './AbstractCommand';
import { PawnSimulator } from '@/src/services/PawnSimulator';

/**
 * Command to move the pawn a specified number of steps.
 *
 * Example: MOVE 2, MOVE 1, MOVE
 *
 * If no steps are provided, the pawn moves 1 step by default.
 * For first move, the pawn moves 2 steps. After the first move, it moves 1 step.
 */
export class MoveCommand extends Command {
  constructor(private steps: number) {
    super();
  }

  /**
   * Executes the MOVE command on the given PawnSimulator instance.
   *
   * @param simulator The PawnSimulator instance to execute the command on.
   * @returns void
   */
  execute(simulator: PawnSimulator): void {
    simulator.move(this.steps);
  }

  /**
   * Returns a string representation of the MOVE command.
   *
   * @returns A string representing the MOVE command.
   */
  toString(): string {
    return `MOVE ${this.steps}`;
  }

  /**
   * Factory method to create a MoveCommand instance from arguments.
   *
   * @param args Optional array of string arguments.
   * @returns A new instance of MoveCommand.
   */
  static create(args?: string[]): MoveCommand {
    const steps = args?.length === 1 ? parseInt(args[0], 10) : 1;

    if (isNaN(steps) || steps < 1) {
      throw new Error('Invalid arguments for MOVE command');
    }

    return new MoveCommand(steps);
  }
}
