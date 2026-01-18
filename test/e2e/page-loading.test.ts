import { test, expect } from '@playwright/test';

test('Pawn Simulator homepage should load correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Pawn Simulator');
  await expect(page.getByText('Pawn Simulator')).toBeVisible();
  await expect(page.getByRole('button', { name: 'PLACE' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'MOVE' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'LEFT' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'RIGHT' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'REPORT' })).toBeVisible();
});
