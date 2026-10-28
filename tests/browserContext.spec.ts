import{test,expect,chromium} from '@playwright/test';
test("browser settings",async () => {
    const browser=await chromium.launch({headless:false});
    const context=await browser.newContext(

        {

            viewport:{width:700,height:700},
            locale:"en-US",
           // proxy:{server:'http://myproxy.com:3128',username:'myuser',password:'mypassword'},
           ignoreHTTPSErrors:true
        }
    )
    const page=await context.newPage();
    await page.goto("https://expired.badssl.com/");
    console.log(await page.title());
    await page.waitForTimeout(5000);


})
