import { test, expect,Locator} from '@playwright/test';
test("verify dropdown contains duplicates", async ({ page }) =>
{
        await page.goto("https://testautomationpractice.blogspot.com/");
       // const dropdownoptions: Locator = page.locator("#colors  option");
        const dropdownoptions: Locator = page.locator("#colors  animals");

       const optionText:string[] = (await dropdownoptions.allTextContents()).map(text => text.trim());
       const  myset=new Set<String>();
       const duplicates: string[] =[];

       for(const text of optionText)
       {
            if(myset.has(text))
            {
                duplicates.push(text);
            }
            else
            {
                myset.add(text);
            }

       }
       console.log("Duplicates are: "+duplicates);
       if(duplicates.length>0)
         {
            console.log("Dropdown contains duplicates"+duplicates);
         }
            else
            {
                console.log("Dropdown does not contains duplicates");
            }
            expect(duplicates.length).toBe(0);

   





})