import { Rotate } from '../../../types/pawn-simulator-types';
import { Command } from './AbstractCommand';
import { PawnSimulator } from '../PawnSimulator';

export class RotateCommand extends Command {
  constructor(private rotation: Rotate) {
    super();
  }

  execute(simulator: PawnSimulator): void {
    simulator.rotate(this.rotation);
  }

  toString(): string {
    return `${this.rotation}`;
  }

  static create(commandName: Rotate): RotateCommand {
    return new RotateCommand(commandName);
  }
}
