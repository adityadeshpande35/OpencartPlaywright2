import {test,expect, Locator} from "@playwright/test" ;
test("Read the data from all table pages",async ({page})=>
{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    let hasmorepages=true;
    while(hasmorepages)
    {
        const rows=await page.locator("#example tbody tr").all();
        for(let  row of rows)
        {
         console.log( await row.innerText());
        }
        await page.waitForTimeout(2000);
        //button[aria-label='Next']
        //button[aria-controls='example']:has-text("›")
        //button[aria-controls='example']:nth-child(9)


        const nextbutton: Locator = page.locator('button[aria-label="Next"]');
        const isDisabled=await nextbutton.getAttribute("class");
        if(isDisabled?.includes("disabled"))
        {
            hasmorepages=false;
        }
        else
        {
            await nextbutton.click();
        }
    }
        

})
test("Filter the rows and check row count",async ({page})=>
{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const dropdown: Locator = page.locator("#dt-length-0");
    await dropdown.selectOption({label:"25"});
    const rows=await page.locator("#example tbody tr").all();
    expect(rows.length).toBe(25);
    const rows2=await page.locator("#example tbody tr");
    await expect(rows2).toHaveCount(25);


    
        

})
test.only("search for specific data in a table",async ({page})=>
{
    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const searchbox: Locator = page.locator("#dt-search-0");
    await searchbox.fill("paul Byrd");
    await page.waitForTimeout(5000);

    const rows=await page.locator("#example tbody tr").all();
    if(rows.length>=1)
    {
        let matchfound=false;
        for(let  row of rows )
        {
            const text=await row.innerText();
            if(text.includes("Paul Byrd"))
            {
                console.log("record exists or found")
                matchfound=true;
                break;

            }
        }
        expect(matchfound).toBe(true);
        expect(matchfound).toBeTruthy();

    }
    else{
        console.log("no rows found with the given search criteria");
    }

  

    
        

})
            

       



