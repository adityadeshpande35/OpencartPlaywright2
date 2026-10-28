import { test, expect,Locator} from '@playwright/test';
test("Auosuggest Dropdown Handling",async ({ page }) => {

await page.goto("https://www.flipkart.com/"); 
await page.locator("input[name='q']").fill("smart");
await page.waitForTimeout(5000);

const options: Locator = page.locator("ul li");
const count=await options.count();

console.log("Number of suggested options:",count);

console.log("5th option",await options.nth(5).innerText());
console.log("printing all autosuggest options.....");

for(let i=0;i<count;i++)
{


    const text=await options.nth(i).innerText();
    if(text==="smartphone")
    {
        await options.nth(i).click();
        break;
    }
}





})