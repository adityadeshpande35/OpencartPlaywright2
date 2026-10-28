import { test, expect,Locator} from '@playwright/test';
test("Verify CSS locators",async ({ page }) => {

await page.goto("https://demowebshop.tricentis.com/");
// tag#id
//const searchBox: Locator = page.locator("input#small-searchterms");
//await searchBox.fill("T-shirt");
//await expect(page.locator("input#small-searchterms")).toBeVisible();
//await page.locator("input#small-searchterms").fill("t-shirts");
//await page.locator("#small-searchterms").fill("t-shirts");
//await page.pause();




//tag.class
//await page.locator("input.search-box-text").fill("T-shirts");
//await page.locator(".search-box-text").fill("T-shirts");


//tag[attr='value']
//await page.locator("input[name='q']").fill("T-shirts");
//await page.locator("[name='q']").fill("T-shirts");

//tag.class[attr='value']
await page.locator("input.search-box-text[value='Search store']").fill("T-shirts");
await page.locator(".search-box-text[value='Search store']").fill("T-shirts");







})