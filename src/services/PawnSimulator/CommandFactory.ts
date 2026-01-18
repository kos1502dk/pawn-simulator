import { Command } from './commands/AbstractCommand';
import { PlaceCommand } from './commands/PlaceCommand';
import { MoveCommand } from './commands/MoveCommand';
import { RotateCommand } from './commands/RotateCommand';
import { COMMANDS, isValidCommand, isRotateCommand } from '../../types/pawn-simulator-types';

/**
 * Factory class to create command instances based on action names and arguments.
 */
export class CommandFactory {
  /**
   * Creates a command instance based on the given action and arguments.
   *
   * @param action The action name of the command.
   * @param args Optional arguments for the command.
   * @returns An instance of a Command.
   */
  static createCommand(action: string, args?: string[]): Command {
    const commandName = action.toUpperCase();

    if (!isValidCommand(commandName)) {
      throw new Error(`Invalid command: ${commandName}`);
    }

    switch (commandName) {
      case COMMANDS.PLACE:
        return PlaceCommand.create(args ?? []);

      case COMMANDS.MOVE:
        return MoveCommand.create(args ?? []);

      case COMMANDS.LEFT:
      case COMMANDS.RIGHT:
        if (isRotateCommand(commandName)) {
          return RotateCommand.create(commandName);
        }
        throw new Error(`Invalid rotate command: ${commandName}`);

      default:
        throw new Error(`Unknown command: ${commandName}`);
    }
  }
}
