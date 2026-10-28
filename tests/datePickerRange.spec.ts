import { test, expect } from '@playwright/test';

test('Date Range Picker ', async ({ page }) => {
  // Navigate to the site
  await page.goto('https://testautomationpractice.blogspot.com/');
  

  // Fill in the start and end date using CSS selectors ( date format:  dd-mm-yyyy)

  //The error Malformed value when using locator.fill("20-10-2025") occurs because the <input type="date"> expects a date in the format YYYY-MM-DD — not DD-MM-YYYY.
  //await page.locator('#start-date').fill('18-02-2027'); //DD-MM-YYYY
  //await page.locator('#end-date').fill('18-03-2027'); //DD-MM-YYYY
   

  await page.locator('#start-date').fill('2016-02-18'); //YYYY-MM-DD
  await page.locator('#end-date').fill('2016-03-18'); //YYYY-MM-DD

  await page.waitForTimeout(5000);

  // Click on Submit button
  await page.locator('.submit-btn').click();

  // Assertion: Check if submission resulted in any visible success message or confirmation
  const successMessage = page.locator('#result');
  await expect(successMessage).toBeVisible();

  console.log("string:",await page.locator('#start-date').inputValue());
  console.log("ending:",await page.locator('#end-date').inputValue());

  expect(await page.locator('#start-date').inputValue()).toBe('2016-02-18');
  expect(await page.locator('#end-date').inputValue()).toBe('2016-03-18');
  
  
});