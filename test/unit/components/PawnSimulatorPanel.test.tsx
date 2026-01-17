import { render, screen } from '@testing-library/react';
import PawnSimulatorPanel from '@/src/components/PawnSimulatorPanel';
import { describe, it, expect } from 'vitest';

describe('PawnSimulatorPanel', () => {
  it('renders Pawn Controller title', () => {
    render(<PawnSimulatorPanel />);
    expect(screen.getByText('Pawn Controller')).toBeInTheDocument();
  });
});
