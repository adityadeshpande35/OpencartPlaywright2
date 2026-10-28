import { test, chromium } from '@playwright/test';

test("Retrieve all table data", async () => {

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://letzautomate.github.io/samples/eCommerce.html');
  await page.waitForLoadState('domcontentloaded');

  // Locate table
  const productTable = page.locator('#productTable');

  // Locate all rows from tbody
  const rows = productTable.locator('tbody tr');

  // Count total rows
  const rowCount = await rows.count();

  // Loop through each row
  for (let i = 0; i < rowCount; i++) {

    // Get all columns(cells) from current row
    const columns = rows.nth(i).locator('td');

    // Count total columns
    const columnCount = await columns.count();

    let rowData = '';

    // Loop through each column
    for (let j = 0; j < columnCount; j++) {

      // Get cell text
      const cellText = await columns.nth(j).innerText();

      // Append cell data
      rowData += cellText.trim() + ' | ';
    }

    // Print complete row data
    console.log(`Row ${i + 1}: ${rowData}`);
  }

  await browser.close();
});