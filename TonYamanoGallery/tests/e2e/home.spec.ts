import { test, expect } from '@playwright/test'

test.describe('TonYamanoGallery homepage', () => {
  test('displays hero information and gallery cards', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { name: 'Personal Photo Gallery' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Signature Series' })).toBeVisible()

    const cards = page.locator('article').filter({ hasText: 'Preview' })
    await expect(cards).toHaveCount(6)

    await page.getByRole('button', { name: 'Preview' }).first().click()
    await expect(page.getByRole('heading', { name: /Aurora Reflections|Serene Dawn|Urban Poetry/ })).toBeVisible()
    await page.getByRole('button', { name: 'Close' }).click()
    await expect(page.getByRole('dialog')).toHaveCount(0)
  })

  test('renders gallery versions with preview images', async ({ page }) => {
    await page.goto('#versions')

    const versionHeadings = page.locator('h3').filter({ hasText: 'Version' })
    await expect(versionHeadings).toHaveCount(3)

    const previewImages = page.locator('#versions img')
    await expect(previewImages).toHaveCount(3)
  })
})
