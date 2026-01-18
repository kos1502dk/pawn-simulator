import { PawnSimulator } from '@/src/services/PawnSimulator';

/**
 * Abstract base class for all commands in the PawnSimulator.
 */
export abstract class Command {
  /**
   * Executes the command on the given PawnSimulator instance.
   *
   * @param simulator The PawnSimulator instance to execute the command on.
   * @returns void
   */
  abstract execute(simulator: PawnSimulator): void;

  /**
   * Returns a string representation of the command.
   *
   * @returns A string representing the command.
   */
  abstract toString(): string;
}
