import { test,expect,chromium } from '@playwright/test'

test("Retrive values from particualr column", async () => {

const browser=await chromium.launch();
const context=await browser.newContext();
const page=await context.newPage();

 
 

  await page.goto('https://letzautomate.github.io/samples/eCommerce.html');
  await page.waitForLoadState('domcontentloaded');

  // Locate table
  const productTable = page.locator('#productTable');

  // Get all headers
  const headers = productTable.locator('thead tr th');
  const headerCount = await headers.count();

  let priceColIndex = -1;

  // Find index of "Price" column
  for (let i = 0; i < headerCount; i++) {
 const headerText: string = (await headers.nth(i).innerText()).trim();

    if (headerText.toLowerCase() === 'price') {
      priceColIndex = i;
      break;
    }
  }

  if (priceColIndex === -1) {
    console.log('Column not found');
  } else {

    const rows = productTable.locator('tbody tr');
    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {

      const priceCell = rows.nth(i)
        .locator(`td:nth-child(${priceColIndex + 1})`);

      console.log(await priceCell.innerText());
    }
  }



})
