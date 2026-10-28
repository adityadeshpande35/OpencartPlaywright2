import{test,expect} from '@playwright/test';
/*
test("@sanity @regression check title of home page",async({page})=>{
 await page.goto("https://www.google.com/");
 await expect(page).toHaveTitle("Google");

})*/

test("check title of home page",{tag:'@sanity'},async ({page})=>
{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");

})
test("check navigation to store page",{tag:'@regression'},async ({page})=>
{
    await page.goto("https://www.google.com/");
    await page.locator("text='Store'").click();
    await expect(page).toHaveTitle("Google Store for Google Made Devices & Accessories");

})
test("check top recommendations",{tag:['@sanity','@regression']},async ({page})=>
{
    await page.goto("https://www.google.com/");
    await page.locator("text='Store'").click();
    await expect(page.locator("text='Popular on the Google Store.'")).toHaveText("Popular on the Google Store.");

})