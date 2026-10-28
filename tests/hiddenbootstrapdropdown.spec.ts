import { test, expect,Locator} from '@playwright/test';
test("bootstrap hidden dropdown handling",async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();

    await page.getByText('PIM').click();
    await page.waitForTimeout(3000);

    await page.locator("form i").nth(2).click(); //clicking on dropdown icon
    await page.waitForTimeout(3000);

    const options: Locator = page.locator("div[role='listbox'] span");
    const count=await options.count();
    console.log("Number of options in dropdown:",count);   

    //printing all options
    console.log("All the text content in dropdown:",await options.allTextContents());

    console.log("pricing all options...")
    for(let i=0;i<count;i++)
    {
        
        //console.log(await options.nth(i).innerText());
        console.log(await options.nth(i).textContent());

    }

        for(let i=0;i<count;i++)
    {
        
        const text=await options.nth(i).textContent();
        if(text==='Automation Tester')
        {
            await options.nth(i).click();
            break;
        }

    }
await page.waitForTimeout(3000);

})