/**
 * This store stores command list that a user has selected to execute.
 *
 * It provides methods to add, clear, and remove commands from the list.
 */
import { create } from 'zustand';

interface CommandsState {
  commands: string[];
  addCommand: (command: string) => void;
  clearCommands: () => void;
  removeCommand: (index: number) => void;
}

export const useCommandsStore = create<CommandsState>((set) => ({
  commands: [],

  addCommand: (command: string) =>
    set((state) => ({
      commands: [...state.commands, command],
    })),

  clearCommands: () =>
    set(() => ({
      commands: [],
    })),

  removeCommand: (index: number) =>
    set((state) => ({
      commands: state.commands.filter((_, i) => i !== index),
    })),
}));
