import { test, expect } from '@playwright/test';

test('Pawn Simulator homepage should load correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Pawn Simulator/);
});
