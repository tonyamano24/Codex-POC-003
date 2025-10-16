import { test, expect } from '@playwright/test';

test.describe('Collections experience', () => {
  test('navigates to a collection detail page', async ({ page }) => {
    await page.goto('/collections');

    await expect(page.getByRole('heading', { name: 'Gallery Collections' })).toBeVisible();

    await page.getByRole('link', { name: 'View Story' }).first().click();

    await expect(page.getByRole('heading', { name: /Urban Echoes|Quiet Portraits|Wandering Sol/ })).toBeVisible();
    await expect(page.getByText(/photographs/)).toBeVisible();

    await page.getByRole('link', { name: '← Back to Collections' }).click();
    await expect(page).toHaveURL(/\/collections$/);
  });
});
