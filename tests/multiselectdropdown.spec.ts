import { test, expect,Locator} from '@playwright/test';
test("Multi select dropdown test", async ({ page }) => 
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //1 select option from the dropdown (4 ways)
    await page.locator('#colors').selectOption (['Red', 'Green','Blue']);//visible text
    await page.locator('#colors').selectOption ( ['red','green','white']);//value
    await page.locator('#colors').selectOption([{ label: 'Red' }, { label: 'Green' }, { label: 'Yellow' }]);//label
    await page.locator('#colors').selectOption([{ index:0 }, {index:2 }, { index:4 }]);//index

    //2.chcek no of options in dropdown (count)
    const dropdownOptions:Locator=page.locator('#colors option');
    await expect(dropdownOptions).toHaveCount(7);

    //3.check an option is present in dropdown
    const optionText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
    console.log(optionText);
    expect(optionText).toContain('Green');

    //4.printing options from the dropdown 
    for(const option of optionText)
    {
        console.log(option);
    }



})