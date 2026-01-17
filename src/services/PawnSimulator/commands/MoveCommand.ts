import { Command } from './AbstractCommand';
import { PawnSimulator } from '../PawnSimulator';

export class MoveCommand extends Command {
  constructor(private steps: number) {
    super();
  }

  execute(simulator: PawnSimulator): void {
    simulator.move(this.steps);
  }

  toString(): string {
    return `MOVE ${this.steps}`;
  }

  static create(args?: string[]): MoveCommand {
    const steps = args?.length === 1 ? parseInt(args[0], 10) : 1;

    if (isNaN(steps) || steps < 1) {
      throw new Error('Invalid arguments for MOVE command');
    }

    return new MoveCommand(steps);
  }
}
