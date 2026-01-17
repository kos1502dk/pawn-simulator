import { PawnSimulator } from '@/src/services/PawnSimulator/PawnSimulator';
import { DIRECTION, PAWN_COLOR, ROTATE } from '@/src/types/pawn-simulator-types';
import { describe, it, expect, beforeEach } from 'vitest';

describe('PawnSimulator', () => {
  let simulator: PawnSimulator;

  beforeEach(() => {
    simulator = new PawnSimulator();
  });

  it('places a pawn on the board', () => {
    simulator.place(0, 0, DIRECTION.NORTH, PAWN_COLOR.WHITE);
    expect(simulator.report()).toBe('0,0,NORTH,WHITE');
  });

  it('throws if placing pawn out of bounds', () => {
    expect(() => simulator.place(-1, 0, DIRECTION.NORTH, PAWN_COLOR.WHITE)).toThrow();
    expect(() => simulator.place(8, 8, DIRECTION.NORTH, PAWN_COLOR.WHITE)).toThrow();
  });

  it('moves pawn forward one step after first move', () => {
    simulator.place(0, 0, DIRECTION.NORTH, PAWN_COLOR.WHITE);
    simulator.move();
    expect(simulator.report()).toBe('0,1,NORTH,WHITE');
    simulator.move();
    expect(simulator.report()).toBe('0,2,NORTH,WHITE');
  });

  it('throws if moving more than one step after first move', () => {
    simulator.place(0, 0, DIRECTION.NORTH, PAWN_COLOR.WHITE);
    simulator.move();
    expect(() => simulator.move(2)).toThrow();
  });

  it('allows pawn to move two steps only on first move', () => {
    simulator.place(0, 0, DIRECTION.NORTH, PAWN_COLOR.WHITE);
    simulator.move(2);
    expect(simulator.report()).toBe('0,2,NORTH,WHITE');
  });

  it('throws if moving pawn out of bounds', () => {
    simulator.place(0, 0, DIRECTION.SOUTH, PAWN_COLOR.WHITE);
    expect(() => simulator.move()).toThrow();
  });

  it('throws if moving before placing pawn', () => {
    expect(() => simulator.move()).toThrow();
  });

  it('rotates pawn left and right', () => {
    simulator.place(0, 0, DIRECTION.NORTH, PAWN_COLOR.WHITE);
    simulator.rotate(ROTATE.LEFT);
    expect(simulator.report()).toBe('0,0,WEST,WHITE');
    simulator.rotate(ROTATE.RIGHT);
    expect(simulator.report()).toBe('0,0,NORTH,WHITE');
  });

  it('throws if rotating before placing pawn', () => {
    expect(() => simulator.rotate(ROTATE.LEFT)).toThrow();
  });

  it('returns null if reporting before placing pawn', () => {
    expect(simulator.report()).toBeNull();
  });
});
