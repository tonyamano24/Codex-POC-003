import { test, expect } from '@playwright/test'

test.describe('Ton Yamano Gallery', () => {
  test('hero and gallery sections render content', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { name: 'Moments of quiet wonder, captured in light.' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'View Gallery' })).toBeVisible()

    const gallerySection = page.locator('#gallery')
    await expect(gallerySection).toBeVisible()
    await expect(gallerySection.getByRole('article')).toHaveCount(6)
  })

  test('about section references Ton Yamano', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('#about')).toContainText('Ton Yamano')
    await expect(page.locator('#about')).toContainText('Photography as a practice of presence.')
  })
})
