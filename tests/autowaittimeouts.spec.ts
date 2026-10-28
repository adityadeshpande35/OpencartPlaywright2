import{test,expect,chromium}from'@playwright/test';


test('autowait and forcing timeouts',async ({})=>{
    

 const browser=await chromium.launch({headless:false});
 const context=await browser.newContext(

        {
            ignoreHTTPSErrors:true

        })

        const page=await context.newPage();

    test.setTimeout(50000); //50 secs
   // test.slow(); 90 secs (Default is 30 secs)

    await page.goto("https://demowebshop.tricentis.com/");

    //Assertion-autowait works
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:10000});
    await expect(page.locator('text=Welcome to our store')).toBeVisible({timeout:10000});


    //Actions-autowait works
    await page.locator('#small-searchterms').fill("Laptop",{force:true});
    await page.locator('.button-1.search-box-button').click({force:true});




})