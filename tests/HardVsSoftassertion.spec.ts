import {test, expect,chromium} from '@playwright/test';

test('Hard vs Soft Assertion Demo', async ({}) => {

    const browser=await chromium.launch({headless:false});
    const context=await browser.newContext(

        {
            ignoreHTTPSErrors:true

        })

        const page=await context.newPage();
        await page.goto("https://demowebshop.tricentis.com/");

    // Hard Assertion
   /* await expect(page).toHaveTitle("Demo Web Shop2");
   await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
   const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
   await expect(logo).toBeVisible();*/



   //soft assertion

  await expect.soft(page).toHaveTitle("Demo Web Shop2");
   await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");
   const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
   await expect.soft(logo).toBeVisible();
   await page.waitForTimeout(3000);



})