import { Command } from './commands/AbstractCommand';
import { CommandFactory } from './CommandFactory';
import logger from '@/src/utils/logger';

/**
 * Parses command strings into Command instances for the PawnSimulator.
 *
 * Example command strings: "MOVE 2", "LEFT", "PLACE 1,2,NORTH,RED"
 */
export class CommandParser {
  static parse(commandString: string): Command {
    logger.info('CommandParser received command string:', commandString);

    const [action, args] = commandString.trim().split(' ');
    const argsArray = args?.length > 0 ? args.split(',') : [];

    return CommandFactory.createCommand(action, argsArray);
  }
}
