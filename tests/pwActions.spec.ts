import { test, expect,Locator} from '@playwright/test';

//textbox

test('Text Input Actions',async({page})=>
{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const textBox:Locator=page.locator("#name");
    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();
    const maxLength:string | null=await textBox.getAttribute("maxlength");
    expect(maxLength).toBe("15");
    await textBox.fill("John kennedy");
    const enteredValue:string=await textBox.inputValue();
    console.log("Input value of the first name: "+enteredValue);
    expect(enteredValue).toBe("John kennedy");
    await page.waitForTimeout(3000);



});
test('Radio btn actions',async({page})=>
{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const maleRadio:Locator=page.locator("#male");
    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();
    expect(await maleRadio.isChecked()).toBe(false);
    await maleRadio.check();
    expect(await maleRadio.isChecked()).toBe(true);
    await expect(maleRadio).toBeChecked();
    await page.waitForTimeout(3000);




})
test.only('Checkbox actions',async({page})=>
{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const sundayCheckBox:Locator=page.getByLabel('Sunday');
    await sundayCheckBox.check();
    expect (sundayCheckBox).toBeChecked();

    const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const checkboxes:Locator[]=days.map(index => page.getByLabel(index));
    expect(checkboxes.length).toBe(7);
//select all checkboxes and assert each is checked
   /* for(const checkbox of checkboxes)
    {
        await checkbox.check();
        expect(checkbox).toBeChecked();
    }
    //uncheck last 3 checkboxes and assert each is unchecked
    await page.waitForTimeout(3000);
    for(const checkbox of checkboxes.slice(-3))
    {
        await checkbox.uncheck();
        expect(checkbox).not.toBeChecked();
    }
 
    await page.waitForTimeout(6000);
    //Toggle checkboxes if unchecked check and vice versa Assert each state

    for(const checkbox of checkboxes)
    {
        if(await checkbox.isChecked())
        {
            await checkbox.uncheck();
            expect(checkbox).not.toBeChecked();
        }
        else
        {
            await checkbox.check();
            expect(checkbox).toBeChecked();
        }
        
    }*/
    //Randomly check few checkboxes and assert based on index
    const index:number[]=[1,3,6];
    for(const i of index)
    {
        await checkboxes[i].check();
        expect(checkboxes[i]).toBeChecked();
    }
    await page.waitForTimeout(8000);
//selecct the checkbox based on label text
const weekname:string="Friday";
for(const label of days)
{
    if(label.toLowerCase()===weekname.toLowerCase())
    {
        const checkbox=page.getByLabel(label);
         checkbox.check();
        await expect(checkbox).toBeChecked();
    }
}

await page.waitForTimeout(8000);

})