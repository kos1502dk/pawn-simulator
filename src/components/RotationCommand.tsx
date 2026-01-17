'use client';

import { useCommandsStore } from '@/src/stores/useCommandsStore';

const RotationCommand = () => {
  const addCommand = useCommandsStore((state) => state.addCommand);

  const handleLeftButton = () => {
    addCommand('LEFT');
  };

  const handleRightButton = () => {
    addCommand('RIGHT');
  };
  return (
    <div className="w-full mb-4 p-4 border border-gray-600 rounded-lg bg-gray-800 shadow-md text-white">
      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium mb-1 text-gray-300">Rotation</label>
          <div className="flex gap-2">
            <button
              onClick={handleLeftButton}
              className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded transition-colors"
            >
              LEFT
            </button>
            <button
              onClick={handleRightButton}
              className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded transition-colors"
            >
              RIGHT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotationCommand;
