import { test, expect } from '@playwright/test';

import  fs from 'fs';
import {parse} from 'csv-parse/sync';



//Reading data from csv file
const csvPath="testdata/data.csv";
const fileContent = fs.readFileSync(csvPath, 'utf-8');
const records:any = parse(fileContent, {
    columns:true,
    skip_empty_lines:true
});





test.describe("login data driven test", async() => {




for (const data of records) {

    

        test(`login test for ${data.email} and ${data.password}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/login");
            await page.locator("#Email").fill(data.email);
            await page.locator("#Password").fill(data.password);
            await page.locator("input[value='Log in']").click();

            if(data.validity.toLowerCase() === "valid")
                {
                    const logoutLink = page.locator("a[href='/logout']");
                    await expect(logoutLink).toBeVisible({timeout:5000});
                }
                else
                {
                    const errormessage = page.locator(".validation-summary-errors");
                    await expect(errormessage).toBeVisible({timeout:5000});


                    //assertion to verify that we are still on the login page
                    await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
                    

                }

    })
    }
    })