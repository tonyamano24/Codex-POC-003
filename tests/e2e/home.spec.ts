import { test, expect } from '@playwright/test';

test.describe('Ton Yamano Gallery', () => {
  test('homepage highlights collections and about section', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Ton Yamano Gallery/i);
    await expect(page.getByRole('heading', { name: 'Curated Collections' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Meet Ton Yamano' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Experiences Beyond the Frame' })).toBeVisible();

    const collectionCards = page.getByRole('article');
    await expect(collectionCards).toHaveCount(3);
  });
});
