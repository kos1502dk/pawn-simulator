import { describe, it, expect } from 'vitest';
import { CommandParser } from '@/src/services/PawnSimulator/CommandParser';
import { ROTATE } from '@/src/types/pawn-simulator-types';
import { PlaceCommand } from '@/src/services/PawnSimulator/commands/PlaceCommand';
import { MoveCommand } from '@/src/services/PawnSimulator/commands/MoveCommand';
import { RotateCommand } from '@/src/services/PawnSimulator/commands/RotateCommand';

describe('CommandParser', () => {
  it('parses PLACE command correctly', () => {
    const cmd = CommandParser.parse('PLACE 1,2,NORTH,WHITE');
    expect(cmd).toBeInstanceOf(PlaceCommand);
    expect(cmd.toString()).toBe('PLACE 1,2,NORTH,WHITE');
  });

  it('parses MOVE command correctly', () => {
    const cmd = CommandParser.parse('MOVE 2');
    expect(cmd).toBeInstanceOf(MoveCommand);
    expect(cmd.toString()).toBe('MOVE 2');
  });

  it('parses MOVE command with default steps', () => {
    const cmd = CommandParser.parse('MOVE');
    expect(cmd).toBeInstanceOf(MoveCommand);
    expect(cmd.toString()).toBe('MOVE 1');
  });

  it('parses LEFT command correctly', () => {
    const cmd = CommandParser.parse('LEFT');
    expect(cmd).toBeInstanceOf(RotateCommand);
    expect(cmd.toString()).toBe(ROTATE.LEFT);
  });

  it('parses RIGHT command correctly', () => {
    const cmd = CommandParser.parse('RIGHT');
    expect(cmd).toBeInstanceOf(RotateCommand);
    expect(cmd.toString()).toBe(ROTATE.RIGHT);
  });

  it('throws error for invalid command', () => {
    expect(() => CommandParser.parse('JUMP 1,2,3')).toThrow('Invalid command: JUMP');
  });

  it('throws error for PLACE with wrong args', () => {
    expect(() => CommandParser.parse('PLACE 1,2,NORTH')).toThrow('Invalid number of arguments for PLACE command');
    expect(() => CommandParser.parse('PLACE 1,2,NORTH,BLUE')).toThrow('Invalid arguments for PLACE command');
    expect(() => CommandParser.parse('PLACE 1,2,NORTH,BLUE,MORE')).toThrow(
      'Invalid number of arguments for PLACE command'
    );
  });

  it('throws error for MOVE with wrong args', () => {
    expect(() => CommandParser.parse('MOVE -1')).toThrow('Invalid arguments for MOVE command');
  });
});
