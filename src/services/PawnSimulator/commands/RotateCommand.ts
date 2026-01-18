import { Rotate } from '../../../types/pawn-simulator-types';
import { Command } from './AbstractCommand';
import { PawnSimulator } from '../PawnSimulator';

/**
 * Command to rotate the pawn either LEFT or RIGHT.
 *
 * Example: LEFT, RIGHT
 *
 * The ROTATE command requires one argument: rotation direction (LEFT or RIGHT).
 */
export class RotateCommand extends Command {
  constructor(private rotation: Rotate) {
    super();
  }

  /**
   * Executes the ROTATE command on the given PawnSimulator instance.
   *
   * @param simulator The PawnSimulator instance to execute the command on.
   */
  execute(simulator: PawnSimulator): void {
    simulator.rotate(this.rotation);
  }

  /**
   * Returns a string representation of the ROTATE command.
   *
   * @returns A string representing the ROTATE command.
   */
  toString(): string {
    return `${this.rotation}`;
  }

  /**
   * Factory method to create a RotateCommand instance from command name.
   *
   * @param commandName The rotation direction (LEFT or RIGHT).
   * @returns A new instance of RotateCommand.
   */
  static create(commandName: Rotate): RotateCommand {
    return new RotateCommand(commandName);
  }
}
