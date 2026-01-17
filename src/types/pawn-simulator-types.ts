export const DIRECTION = {
  NORTH: 'NORTH',
  EAST: 'EAST',
  SOUTH: 'SOUTH',
  WEST: 'WEST',
} as const;

export type Direction = (typeof DIRECTION)[keyof typeof DIRECTION];

// circular array and modular arithmetic
const DIRECTION_CYCLE = [DIRECTION.NORTH, DIRECTION.EAST, DIRECTION.SOUTH, DIRECTION.WEST] as const;

export function rotateDirection(currentDirection: Direction, rotation: Rotate): Direction {
  const currentIndex = DIRECTION_CYCLE.indexOf(currentDirection);
  const offset = rotation === ROTATE.RIGHT ? 1 : -1;
  const newIndex = (currentIndex + offset + DIRECTION_CYCLE.length) % DIRECTION_CYCLE.length;
  return DIRECTION_CYCLE[newIndex];
}

export const PAWN_COLOR = {
  WHITE: 'WHITE',
  BLACK: 'BLACK',
} as const;

export type PawnColor = (typeof PAWN_COLOR)[keyof typeof PAWN_COLOR];

export const ROTATE = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
} as const;

export type Rotate = (typeof ROTATE)[keyof typeof ROTATE];

// Type guard for Rotate
export function isRotateCommand(value: string): value is Rotate {
  return Object.values(ROTATE).includes(value as Rotate);
}

export const COMMANDS = {
  PLACE: 'PLACE',
  MOVE: 'MOVE',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  REPORT: 'REPORT',
} as const;

export type CommandType = (typeof COMMANDS)[keyof typeof COMMANDS];

export function isValidCommand(value: string): value is CommandType {
  return Object.values(COMMANDS).includes(value.toUpperCase() as CommandType);
}
