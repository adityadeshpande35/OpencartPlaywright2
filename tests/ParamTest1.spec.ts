import { test, expect } from '@playwright/test';

const searchItems: string[] = ["laptop", "Gift card", "smartphone","monitor"];

//using for of loop
/*for (const item of searchItems) {

test(`search test for ${item}`, async ({ page}) => {
await page.goto("https://demowebshop.tricentis.com/");
await page.locator("#small-searchterms").fill(item);
await page.locator("input[value='Search']").click();
await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});


})
}*/
//using foreach function
/*searchItems.forEach((item) => {

test(`search test for ${item}`, async ({ page}) => {
await page.goto("https://demowebshop.tricentis.com/");
await page.locator("#small-searchterms").fill(item);
await page.locator("input[value='Search']").click();
await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});


})


})*/

//describe
test.describe("searching items", async() => {
searchItems.forEach((item) => {

test(`search test for ${item}`, async ({ page}) => {
await page.goto("https://demowebshop.tricentis.com/");
await page.locator("#small-searchterms").fill(item);
await page.locator("input[value='Search']").click();
await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});


});


})

})





