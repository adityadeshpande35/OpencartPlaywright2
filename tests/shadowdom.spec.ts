import { test, expect, Locator } from '@playwright/test';

test("shadow dom", async ({ page }) => {
await page.goto("https://books-pwakit.appspot.com/");

await page.locator("#input").fill("Playwright Automation");
await page.keyboard.press("Enter");
await page.waitForTimeout(5000);
const booksfound=await page.locator("h2.title").all();
console.log("Books found: "+booksfound.length);

expect(booksfound.length).toBe(20);

})


test.only("shadow dom2", async ({ page }) => {
await page.goto("https://shop.polymer-project.org/");

await page.locator("a[aria-label=\"Men's Outerwear Shop Now\"]").click();
await page.waitForTimeout(5000);
const productfound=await page.locator("div.title").all();
console.log("No of products found: "+productfound.length);

expect(productfound.length).toBe(16);
await page.waitForTimeout(5000);

})