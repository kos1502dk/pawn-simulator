'use client';

import CommandListPanel from '@/src/components/CommandListPanel';
import MoveCommand from '@/src/components/MoveCommand';
import OutputPanel from '@/src/components/OutputPanel';
import PlaceCommand from '@/src/components/PlaceCommand';
import RotationCommand from '@/src/components/RotationCommand';

const PawnSimulatorPanel = () => {
  return (
    <main className="flex w-full">
      <div className="flex-1 flex flex-col items-center justify-start p-5">
        <h1 className="text-2xl font-bold mb-8">Pawn Controller</h1>
        <PlaceCommand />
        <MoveCommand />
        <RotationCommand />
      </div>

      <div className="flex-1 flex flex-col items-center justify-start p-5">
        <h1 className="text-2xl font-bold mb-8">Command List</h1>
        <CommandListPanel />
        <OutputPanel />
      </div>
    </main>
  );
};

export default PawnSimulatorPanel;
