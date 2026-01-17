import { test, expect } from '@playwright/test';

/**
 * This test will have full scenario tests for placing pawn and moving it around the board. And rotating it.
 */
test.describe('Pawn Simulator full scenario tests', () => {
  test('Pawn Simulator full scenario: place, move, rotate, and report', async ({ page }) => {
    await page.goto('/');

    // Place pawn at (1,2) facing NORTH and WHITE color
    await page.getByTestId('x-input').fill('1');
    await page.getByTestId('y-input').fill('2');
    await page.getByTestId('direction-select').selectOption('NORTH');
    await page.getByTestId('color-select').selectOption('WHITE');
    await page.getByRole('button', { name: 'PLACE' }).click();

    // Move pawn 2 steps forward
    await page.getByTestId('steps-input').fill('2');
    await page.getByRole('button', { name: 'MOVE' }).click();

    // Rotate pawn right (to EAST)
    await page.getByRole('button', { name: 'RIGHT' }).click();

    // Move pawn 1 step forward
    await page.getByTestId('steps-input').fill('1');
    await page.getByRole('button', { name: 'MOVE' }).click();

    // Rotate pawn left (to NORTH)
    await page.getByRole('button', { name: 'LEFT' }).click();

    // Click Report
    await page.getByRole('button', { name: 'REPORT' }).click();

    // // Check Output Panel for correct report
    const output = await page.getByTestId('output-panel').textContent();
    expect(output).toMatch('2,4,NORTH,WHITE');
  });

  test('Pawn Simulator invalid commands should be ignored', async ({ page }) => {
    await page.goto('/');

    // Attempt to move before placing the pawn
    await page.getByTestId('steps-input').fill('1');
    await page.getByRole('button', { name: 'MOVE' }).click();

    // Attempt to rotate left before placing the pawn
    await page.getByRole('button', { name: 'LEFT' }).click();

    // Attempt to report before placing the pawn
    await page.getByRole('button', { name: 'REPORT' }).click();

    // Check Output Panel for no output
    const output = await page.getByTestId('output-panel').textContent();
    expect(output).toMatch(/"MOVE 1" skipped/i);
    expect(output).toMatch(/"LEFT" skipped/i);
  });
});
