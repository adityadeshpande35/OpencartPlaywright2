import { test, expect,chromium } from '@playwright/test';

test("Tabs Handling",async ({ }) => {

const browser=await chromium.launch();
const context=await browser.newContext();

const parentPage=await context.newPage();
await parentPage.goto("https://testautomationpractice.blogspot.com/");

const [childPage]=await Promise.all([
    context.waitForEvent('page'),
     parentPage.locator("button:has-text('New Tab')").click()




])

//Approach1 switch beween pages and get titles(using context)
const pages=context.pages();
console.log("No of pages created:" , pages.length);

console.log("Title of parent page:",await pages[0].title());
console.log("Title of child  page:",await pages[1].title());

//Approach2 alternate
console.log("Title of parent page:",await parentPage.title());
console.log("Title of child  page:",await childPage.title());


});
