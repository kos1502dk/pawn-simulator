import { Command } from './commands/AbstractCommand';
import { CommandFactory } from './CommandFactory';
import logger from '@/src/utils/logger';

export class CommandParser {
  static parse(commandString: string): Command {
    logger.info('CommandParser received command string:', commandString);

    const [action, args] = commandString.trim().split(' ');
    const argsArray = args?.length > 0 ? args.split(',') : [];

    return CommandFactory.createCommand(action, argsArray);
  }
}
