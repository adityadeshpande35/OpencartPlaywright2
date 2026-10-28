import { test, expect,Locator} from '@playwright/test';
import { text } from 'stream/consumers';
test("verify sorted", async ({ page }) =>
{

        await page.goto("https://testautomationpractice.blogspot.com/");
        
       // const dropdownoptions: Locator = page.locator("#animals option");
        const dropdownoptions: Locator = page.locator("#colors > option");

        console.log(await dropdownoptions.allTextContents());

        const optionText:string[] = (await dropdownoptions.allTextContents()).map(text => text.trim());

        const originalList: string[] = [...optionText];
        const sortedList: string[] = [...optionText].sort();
        console.log("Original List: " + originalList);
        console.log("Sorted List: " + sortedList);
        expect(originalList).toEqual(sortedList);


})