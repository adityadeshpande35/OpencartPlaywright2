import { test, expect, Locator } from '@playwright/test';
test('verify playwright locators', async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");

  const logo: Locator = page.getByAltText("nopCommerce");
  await expect(logo).toBeVisible();

  await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible();

  await page.getByRole('link', { name: 'Register' }).click();
  await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();

  await page.getByLabel('First name').fill('John');
  await page.getByLabel('Last name').fill('Wick');
  await page.getByLabel('Email').fill('abc@gmail.com');
  await page.getByPlaceholder('Search store').fill('Apple MacBook Pro');

  await expect(page.getByTitle('Show products in category Electronics')).toHaveText('Electronics');
    await expect(page.getByTitle('Show products in category Apparel')).toHaveText('Apparel');

});