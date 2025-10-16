import { test, expect } from "@playwright/test";

test.describe("TonYamanoGallery", () => {
  test("displays hero content and project previews", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: /cinematic photography/i })).toBeVisible();

    const seriesButton = page.getByRole("link", { name: /explore series/i });
    await expect(seriesButton).toBeVisible();
    await seriesButton.click();

    const featureSection = page.locator("section#projects");
    await expect(featureSection.getByRole("heading", { name: /feature collections/i })).toBeVisible();

    const projectCards = featureSection.getByRole("article");
    await expect(projectCards).toHaveCount(2);

    const previewChips = featureSection.getByText(/v[0-9]/i);
    await expect(previewChips.first()).toBeVisible();
  });
});
