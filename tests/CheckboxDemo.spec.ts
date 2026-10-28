import {test,expect, Page,chromium} from "@playwright/test" ;

test("Checkbox Validations", async () => {

const browser=await chromium.launch();
const context=await browser.newContext();
const page=await context.newPage();

await page.goto("https://sdetqa.vercel.app/autoplay");

const sundayCheckbox = page.getByLabel('Sun');
await sundayCheckbox.check();//check Uncheck
//await sundayCheckbox.setChecked(true);//sundayCheckbox.setChecked(false) true-> check false->uncheck

//Select all checkboxes(Mon-Sun)
const allDays=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

//with map

const allCheckboxes=allDays.map((day) =>
{
    return page.getByLabel(day)
    })

 /*   for(const checkbox of allCheckboxes)
{
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    }*/

//without using map(prefer loop)
for(const day of allDays)
{
    const checkbox=page.getByLabel(day);
    await checkbox.check();
    await expect(checkbox).toBeChecked();
}
//uncheck Fri,Sat,Sun and verify

for(const day of ['Fri','Sat','Sun'])
{
    const checkbox=page.getByLabel(day);
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
}

//Toggle all checkboxes Checked->Unchecked, Unchecked->Checked
for(const day of allDays)
{
    const checkbox=page.getByLabel(day);
    if(await checkbox.isChecked())
    {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }
    else
    {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

}


//select checkboxes using index (1,3,6->Tue,Thu,Sun)
//Only those indesxes should be checked
const indexes=[1,3,6];

for(const i of indexes)
{
await allCheckboxes[i].check();
await expect(allCheckboxes[i]).toBeChecked();
}


//select checkbox with label "Fri"
const friCheckbox = page.getByLabel('Fri');
await friCheckbox.check();
await expect(friCheckbox).toBeChecked();

})