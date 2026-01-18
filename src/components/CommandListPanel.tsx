'use client';

import { useCommandsStore } from '@/src/stores/useCommandsStore';
import { useOutputsStore } from '@/src/stores/useOutputStore';
import { CommandParser } from '@/src/services/PawnSimulator/CommandParser';
import { PawnSimulator } from '@/src/services/PawnSimulator/PawnSimulator';
import logger from '@/src/utils/logger';

const CommandListPanel = () => {
  const { commands, clearCommands } = useCommandsStore();
  const { addOutput } = useOutputsStore();

  const handleClear = () => {
    clearCommands();
  };

  const handleReport = () => {
    const pawnSimulator = new PawnSimulator();

    commands.forEach((commandString) => {
      let commandObj;
      try {
        commandObj = CommandParser.parse(commandString);
        logger.info(commandObj.toString());
      } catch (error) {
        addOutput(`"${commandString}" skipped. Due to error: ${error}`, 'error');
        return;
      }

      try {
        commandObj.execute(pawnSimulator);
      } catch (error) {
        addOutput(`"${commandString}" skipped. Due to error: ${error}`, 'error');
        return;
      }
    });

    const report = pawnSimulator.report();
    addOutput(report ?? '');
  };

  return (
    <div className="w-full p-4 border border-gray-600 rounded-lg bg-gray-800 shadow-md text-white">
      {commands.length > 0 ? (
        <ul className="space-y-1 max-h-40 overflow-y-auto">
          {commands.map((command, index) => (
            <li
              key={index}
              className="px-3 py-2 bg-gray-700 rounded text-sm font-mono text-green-300 border-l-2 border-green-500"
            >
              {index + 1}. {command}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-sm italic">No commands selected yet</p>
      )}

      <div className="flex gap-2 mt-3">
        <button
          onClick={handleReport}
          className="flex-1 px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded transition-colors"
        >
          Report
        </button>
        <button
          onClick={handleClear}
          className="flex-1 px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded transition-colors"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default CommandListPanel;
