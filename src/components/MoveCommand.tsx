'use client';

import { useState } from 'react';
import { useCommandsStore } from '@/src/stores/useCommandsStore';

const initialSteps = '1';

const MoveCommand = () => {
  const [steps, setSteps] = useState(initialSteps);

  const addCommand = useCommandsStore((state) => state.addCommand);

  const handleMoveButton = () => {
    if (steps) {
      const command = `MOVE ${steps}`;
      addCommand(command);
      // Reset form after adding command
      setSteps(initialSteps);
    }
  };
  return (
    <div className="w-full mb-4 p-4 border border-gray-600 rounded-lg bg-gray-800 shadow-md text-white">
      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium mb-1 text-gray-300">Steps (1-2)</label>
        </div>
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <input
              data-testid="steps-input"
              type="number"
              min="1"
              max="2"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="w-full px-2 py-1 text-sm bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="1"
            />
          </div>
          <button
            onClick={handleMoveButton}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded transition-colors"
          >
            MOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoveCommand;
