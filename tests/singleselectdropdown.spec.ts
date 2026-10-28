import { test, expect,Locator} from '@playwright/test';
test('Single select dropdown actions',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //1.select option from  the dropdown (4 ways)

    await page.locator('#country').selectOption('India');//visible text
    await page.locator('#country').selectOption({value:'uk'});//value
     await page.locator('#country').selectOption({label:'India'});//label
     await page.locator('#country').selectOption({index:3});//index


    //2.check no of options in dropdown (count)
    const dropdownOptions:Locator=page.locator('#country option');
    await expect(dropdownOptions).toHaveCount(10);

    //3.check an option is present in dropdown
    const optionText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
    console.log(optionText);
    expect(optionText).toContain('Japan');


    //4.printing options from the dropdown
    for(const option of optionText)
    {
        console.log(option);
    }

await page.waitForTimeout(3000);


    


})