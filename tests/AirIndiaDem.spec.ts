import {test,expect, Page,chromium,firefox,webkit} from "@playwright/test" ;

test("Air India demo", async () => {

const browser=await chromium.launch();
const context=await browser.newContext();
const page=await context.newPage();

await page.goto("https://www.airindia.in/");

 await page.locator("//button[contains(text(),'Accept All')]").first().click();

  // Hover over "Book & Manage"
  const bookManageMenu = page.locator("//a[contains(text(),'Book & Manage')]");
  await bookManageMenu.hover();

  // Click "Search Flights"
  await page.locator("//a[contains(text(),'Search Flights')]").first().click();

  // Wait for origin input and enter ACC
  const originInput = page.locator("//input[@placeholder='Select origin']");
  await originInput.waitFor({ state: 'visible' });
  await originInput.fill('ACC');

  // Select Accra airport from suggestions
  await page.locator(
    "//span[text()='ACC, Accra, Ghana, GH, Kotoka International Airport']"
  ).click();






})