/**
 * This store stores output list that a user has selected to execute.
 *
 * It provides methods to add, clear, and remove outputs from the list.
 */

import { create } from 'zustand';

type OutputStatus = 'normal' | 'error';

interface OutputItem {
  message: string;
  status: OutputStatus;
}

interface OutputsState {
  outputs: OutputItem[];
  addOutput: (message: string, status?: OutputStatus) => void;
  clearOutputs: () => void;
  removeOutput: (index: number) => void;
}

export const useOutputsStore = create<OutputsState>((set) => ({
  outputs: [],
  addOutput(message: string, status: OutputStatus = 'normal') {
    set((state) => ({
      outputs: [...state.outputs, { message, status }],
    }));
  },
  clearOutputs() {
    set(() => ({
      outputs: [],
    }));
  },
  removeOutput(index: number) {
    set((state) => ({
      outputs: state.outputs.filter((_, i) => i !== index),
    }));
  },
}));
