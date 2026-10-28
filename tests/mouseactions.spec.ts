import { test, expect } from '@playwright/test';
test("Mouse hover",async ({page}) => {

await page.goto("https://testautomationpractice.blogspot.com/");
const pointme=page.locator(".dropbtn");
await pointme.hover();
const laptop=page.locator('.dropdown-content a:nth-child(2)');
await laptop.hover();



})

test("Right Click Handling",async ({page}) => {

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    const button=page.locator("span.context-menu-one");
    await button.click({button:'right'});
    await page.waitForTimeout(3000);



})
test("Double Click Handling",async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const btncopy=page.locator("button[ondblclick='myFunction1()']");
    await btncopy.dblclick();
    const field2=page.locator("#field2");
     expect(field2).toHaveValue("Hello World!");


})

test.only("Drag and Drop Handling",async ({page}) => {

    await page.goto("https://codepen.io/EpsilonDeltaCriterion/pen/jLoPgE")

      // Switch to the iframe that contains the demo

    const frame = page.frameLocator('iframe[name="CodePen"]');

  const rome = frame.locator("#box6");        // Oslo
  const italy = frame.locator("#box106");   


    //approach1 -mouse hover and drag manually

   await rome.hover();
    await page.mouse.down();
    await italy.hover();
    await page.mouse.up();


    //approach2- using drag and drop method

   const washington=frame.locator("#box3");
    const usa=frame.locator("#box103");

    await washington.dragTo(usa);



})