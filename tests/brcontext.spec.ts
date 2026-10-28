import {test,expect, Page,chromium,firefox,webkit} from "@playwright/test" ;

test("browser context demo", async () => {

const browser=await chromium.launch();
const context=await browser.newContext();
const page1=await context.newPage();
const page2=await context.newPage();
console.log("No of pages created:",context.pages().length);

 //await page.goto("https://testautomationpractice.blogspot.com/");

 await page1.goto("https://playwright.dev/");
 await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

 await page2.goto("https://www.selenium.dev/");
 await expect(page2).toHaveTitle("Selenium");

 await page1.waitForTimeout(5000);
  await page2.waitForTimeout(5000);

})