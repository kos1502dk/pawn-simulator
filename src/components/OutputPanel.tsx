'use client';

import { useOutputsStore } from '@/src/stores/useOutputStore';

const OutputPanel = () => {
  const { outputs, clearOutputs } = useOutputsStore();

  return (
    <div className="w-full mt-4 p-4 border border-gray-600 rounded-lg bg-gray-800 shadow-md text-white">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-medium">Output</h2>
        {outputs.length > 0 && (
          <button
            onClick={clearOutputs}
            className="px-3 py-1 bg-amber-600 hover:bg-amber-600 text-white text-xs font-medium rounded transition-colors"
          >
            Clear
          </button>
        )}
      </div>
      <div className="h-50 overflow-y-auto bg-gray-900 p-3 rounded">
        {outputs.length === 0 ? (
          <p className="text-sm text-gray-400 italic">No output yet.</p>
        ) : (
          <div className="space-y-2">
            {outputs.map((output, index) => (
              <div key={index} className="p-2 bg-gray-800 rounded border-l-2 border-green-200">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs text-gray-400">Output #{index + 1}</span>
                  <span className="text-xs text-gray-500">{new Date().toLocaleTimeString()}</span>
                </div>
                <pre
                  className={`text-sm font-mono whitespace-pre-wrap ${
                    output.status === 'error' ? 'text-red-400 border-red-300' : 'text-green-300 border-green-200'
                  }`}
                >
                  {output.message}
                </pre>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputPanel;
