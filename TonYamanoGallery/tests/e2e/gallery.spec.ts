import { test, expect } from "@playwright/test";

test.describe("Ton Yamano Gallery", () => {
  test("displays hero content", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1, name: "Personal Photo Gallery" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Stories in light and shadow" })).toBeVisible();
    await expect(page.getByRole("button", { name: /View artist statement/i })).toBeVisible();
  });

  test("lists curated collections", async ({ page }) => {
    await page.goto("/");

    const cards = page.getByRole("article");
    await expect(cards).toHaveCount(3);
    await expect(cards.nth(0)).toContainText("Aurora Diaries");
    await expect(cards.nth(1)).toContainText("Tokyo After Rain");
    await expect(cards.nth(2)).toContainText("Desert Echoes");
  });
});
