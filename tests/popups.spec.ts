import { test, expect,chromium,Page} from '@playwright/test';
test("handle Popups",async ({browser}) => {


    const context=await browser.newContext();

    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");

    await Promise.all([
        page.waitForEvent('popup'),
         page.locator("#PopUp").click(),
        page.waitForLoadState()

    ]);

    

    const allPopupWindows=context.pages();

    console.log("No of pages/windows:",allPopupWindows.length);

  //  console.log(allPopupWindows[0].url());
    console.log(allPopupWindows[0].url());
    console.log(allPopupWindows[1].url());


    for(const pw of allPopupWindows)
    {
        const title=await pw.title();
        if(title.includes('Selenium'))
        {
            await pw.locator(".navbar-toggler-icon").click();
            await pw.waitForTimeout(5000);
            await pw.close();

        }
    }
    


   await page.waitForTimeout(5000);


})
