import { test, expect,chromium} from '@playwright/test';
test("handle Authenticated Popups",async () => {

    const browser=await chromium.launch();

    const context=await browser.newContext({httpCredentials:{
        username:"admin",
        password:"admin"
    }});
    const page=await context.newPage();

    //Approach1:- embedding username and password in url
   /* await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

    await  page.waitForLoadState();
    await expect(page.locator("text=Congratulations")).toBeVisible();*/

    //aproach2:- using httpCredentials while creating browser context

    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    await  page.waitForLoadState();
    await expect(page.locator("text=Congratulations")).toBeVisible();




})
