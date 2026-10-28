import { test, expect, Page } from '@playwright/test';

test('Infinite Scrolling Demo', async ({ page }) => {

    test.slow(); // Set timeout for a single test Easy way to triple the default timeout i.e. 30 secs(30000  ms)
    await page.goto('https://www.booksbykilo.in/new-books?pricerange=201to500');

    let previousHeight = 0;

    while (true) {

        //scroll down the page
await page.evaluate(() => 
    {
        
        window.scrollTo(0, document.body.scrollHeight);
    }); 

    //wait for new content to load

    await page.waitForTimeout(2000); // Wait for new content to load


    //captute the height of the page

const currentHeight=await page.evaluate(() => 
    {
        
       return  document.body.scrollHeight;
    }); 

    console.log("Previous Height:",previousHeight);
    console.log("Current Height:",currentHeight);

    if(currentHeight===previousHeight)
        {
            break;
        }
        previousHeight=currentHeight;
    


    }
     console.log("reached end of the page");

})