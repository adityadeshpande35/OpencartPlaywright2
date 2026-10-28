import { test, expect,Locator} from '@playwright/test';
test("Verify chrome cpu load in dynamic table",async ({ page }) => {


await page.goto("https://practice.expandtesting.com/dynamic-table");

const table:Locator=page.locator("table.table tbody");
await expect(table).toBeVisible();

//Select all the rows then find the no of rows
const rows:Locator[]=await table.locator("tr").all();
console.log("Number of rows in the table:",rows.length);
expect(rows).toHaveLength(4);

//Step 1: for chrome process get value of cpu load
//Read each row and check chrome presence
let cpuLoad=''
for(const row of rows)
{
    const processName:string=await row.locator("td").nth(0).innerText();
    if(processName ==='Chrome')
    {
        cpuLoad=await row.locator('td:has-text("%")').innerText();
        console.log("CPU load for chrome process:",cpuLoad);
        break;
    }

}
//step2:compare it with value in yellow label
let yellowboxText:string=await page.locator("#chrome-cpu").innerText();
console.log("CPU load in yellow box:",yellowboxText);

if(yellowboxText.includes(cpuLoad))
{
    console.log("CPU load of chrome is equal");

}else

    {
    console.log("CPU load of chrome is not equal ");
    }
    expect(yellowboxText).toContain(cpuLoad);






})