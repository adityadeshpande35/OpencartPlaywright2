import { test, expect} from '@playwright/test';
import type { Locator } from '@playwright/test';
test("Verify chrome cpu load in dynamic table",async ({ page }) => {


await page.goto("https://testautomationpractice.blogspot.com/");

const table:Locator=page.locator("table#taskTable");
await expect(table).toBeVisible();

//Select all the rows then find the no of rows
const rows:Locator[]=await table.locator("tbody tr").all();
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
//step2:compare it with value in red label
let redboxlabel:string=await page.locator('div.display-values p strong:has-text("%")').innerText();
console.log("memory size in red label:",redboxlabel);

if(redboxlabel.includes(cpuLoad))
{
    console.log("CPU load of chrome is equal");

}else

    {
    console.log("CPU load of chrome is not equal ");
    }
    expect(redboxlabel).toContain(cpuLoad);






})

test("Verify network speed of chrome in dynamic table",async ({ page }) => {


await page.goto("https://testautomationpractice.blogspot.com/");

const table:Locator=page.locator("table#taskTable");


//Select all the rows then find the no of rows
const rows:Locator[]=await table.locator("tbody tr").all();


//Step 1: for chrome process get value of cpu load
//Read each row and check chrome presence
let networkspeed=''
for(const row of rows)
{
    const processName:string=await row.locator("td").nth(0).innerText();
    if(processName ==='Chrome')
    {
        networkspeed=await row.locator('td:has-text("Mbps")').innerText();
        console.log("Network speed for chrome  process:",networkspeed);
        break;
    }

}
//step2:compare it with value in yellow label
let orangelabelText:string=await page.locator('div.display-values p strong.chrome-network').innerText();
console.log("network speed in orange label:",orangelabelText);

if(orangelabelText.includes(networkspeed))
{
    console.log("network speed of chrome is equal");

}else

    {
    console.log("network speed of chrome is not equal ");
    }
    expect(orangelabelText).toContain(networkspeed);



})


test("Verify firefox memory size in dynamic table",async ({ page }) => {


await page.goto("https://testautomationpractice.blogspot.com/");

const table:Locator=page.locator("table#taskTable");


//Select all the rows then find the no of rows
const rows:Locator[]=await table.locator("tbody tr").all();


//Step 1: for chrome process get value of cpu load
//Read each row and check chrome presence
let memorysize=''
for(const row of rows)
{
    const processName:string=await row.locator("td").nth(0).innerText();
    if(processName ==='Firefox')
    {
        memorysize=await row.locator("td", { hasText: /MB$/ }).innerText();
        console.log("Memory size for firefox process:",memorysize);
        break;
    }

}
//step2:compare it with value in yellow label

let blueboxlabel:string=await page.locator('div.display-values p strong.firefox-memory').innerText();
console.log("memory size in blue box:",blueboxlabel);

if(blueboxlabel.includes(memorysize))
{
    console.log("memory size of firefox is equal");

}else

    {
    console.log("memory size of firefox is not equal ");
    }
    expect(blueboxlabel).toContain(memorysize);






})

test("Verify disk space for firefox process",async ({ page }) => {


await page.goto("https://testautomationpractice.blogspot.com/");

const table:Locator=page.locator("table#taskTable");


//Select all the rows then find the no of rows
const rows:Locator[]=await table.locator("tbody tr").all();


//Step 1: for chrome process get value of cpu load
//Read each row and check chrome presence
let diskspace=''
for(const row of rows)
{
    const processName:string=await row.locator("td").nth(0).innerText();
    if(processName ==='Firefox')
    {
        diskspace=await row.locator('td:has-text("MB/s")').innerText();
        console.log("Disk space for firefox process:",diskspace);
        break;
    }

}
//step2:compare it with value in yellow label
let violetboxlabel:string=await page.locator('div.display-values p strong.firefox-disk').innerText();
console.log("CPU load in violet box:",violetboxlabel);

if(violetboxlabel.includes(diskspace))
{
    console.log("disk space of firefox is equal");

}else

    {
    console.log("disk space of firefox is not equal ");
    }
    expect(violetboxlabel).toContain(diskspace);






})