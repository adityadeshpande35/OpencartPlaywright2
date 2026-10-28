/*
Keyboard methods:
insertText
down
press
type
up
await page.keyboard
*/

import { test, expect } from '@playwright/test';

test('Keyboard Actions', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const input1=page.locator("#input1");

  //1) focus on input1
    await input1.focus(); //await input1.click(); // both are doing the same thing

    //2) provide the text input 1
    await page.keyboard.insertText("Welcome"); // it is recommended to use type method for keyboard actions. It is simulating the real user typing action.

    //3) Ctrl + A  select the text from input1
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.up("Control");

    //3) Ctrl + C  copy the text from input1
    await page.keyboard.down("Control");
    await page.keyboard.press("C");
    await page.keyboard.up("Control");

    //5 Press TAB - 2 times
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");

    //6) Press Ctrl + V  paste the text in input2
    await page.keyboard.down("Control");
    await page.keyboard.press("V");
    await page.keyboard.up("Control");

    //7) press TAB - 2 times
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    //8) Press Ctrl + V  paste the text in input3
    await page.keyboard.down("Control");
    await page.keyboard.press("V");
    await page.keyboard.up("Control");

    await page.waitForTimeout(5000);


})


test.only('Keyboard Actions - Simple way', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const input1=page.locator("#input1");

  //1) focus on input1
    await input1.focus(); //await input1.click(); // both are doing the same thing

    //2) provide the text input 1
    await page.keyboard.insertText("Welcome"); // it is recommended to use type method for keyboard actions. It is simulating the real user typing action.

    //3) Ctrl + A  select the text from input1
    await page.keyboard.press("Control+A");
    

    //3) Ctrl + C  copy the text from input1
    await page.keyboard.press("Control+C");


    //5 Press TAB - 2 times
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");

    //6) Press Ctrl + V  paste the text in input2
       await page.keyboard.press("Control+V");

    //7) press TAB - 2 times
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    //8) Press Ctrl + V  paste the text in input3
     await page.keyboard.press("Control+V");

    await page.waitForTimeout(5000);


})