'use client';

import { useState } from 'react';
import { useCommandsStore } from '@/src/stores/useCommandsStore';
import { DIRECTION, type Direction, PAWN_COLOR, type PawnColor } from '@/src/types/pawn-simulator-types';

const initialState = {
  xPosition: '0',
  yPosition: '0',
  direction: DIRECTION.NORTH,
  color: PAWN_COLOR.WHITE,
};

const PlaceCommand = () => {
  const [xPosition, setXPosition] = useState(initialState.xPosition);
  const [yPosition, setYPosition] = useState(initialState.yPosition);
  const [direction, setDirection] = useState<Direction>(initialState.direction);
  const [color, setColor] = useState<PawnColor>(initialState.color);

  const addCommand = useCommandsStore((state) => state.addCommand);

  const handlePlaceButton = () => {
    if (xPosition && yPosition && direction && color) {
      const command = `PLACE ${xPosition},${yPosition},${direction},${color}`;

      addCommand(command);

      // Reset form after adding command
      setXPosition(initialState.xPosition);
      setYPosition(initialState.yPosition);
      setDirection(initialState.direction);
      setColor(initialState.color);
    }
  };

  return (
    <div className="w-full mb-4 p-4 border border-gray-600 rounded-lg bg-gray-800 shadow-md text-white">
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-300">X Position (0-7)</label>
            <input
              data-testid="x-input"
              type="number"
              min="0"
              max="7"
              value={xPosition}
              onChange={(e) => setXPosition(e.target.value)}
              className="w-full px-2 py-1 text-sm bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-300">Y Position (0-7)</label>
            <input
              data-testid="y-input"
              type="number"
              min="0"
              max="7"
              value={yPosition}
              onChange={(e) => setYPosition(e.target.value)}
              className="w-full px-2 py-1 text-sm bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="0"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-300">Direction</label>
            <select
              data-testid="direction-select"
              value={direction}
              onChange={(e) => setDirection(e.target.value as Direction)}
              className="w-full px-2 py-1 text-sm bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Direction</option>
              {Object.values(DIRECTION).map((dir) => (
                <option key={dir} value={dir}>
                  {dir}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-gray-300">Color</label>
            <select
              data-testid="color-select"
              value={color}
              onChange={(e) => setColor(e.target.value as PawnColor)}
              className="w-full px-2 py-1 text-sm bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Color</option>
              {Object.values(PAWN_COLOR).map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handlePlaceButton}
          className="w-full px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded transition-colors"
        >
          PLACE
        </button>
      </div>
    </div>
  );
};

export default PlaceCommand;
