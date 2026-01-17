import { PawnSimulator } from '../PawnSimulator';

export abstract class Command {
  abstract execute(simulator: PawnSimulator): void;
  abstract toString(): string;
}
