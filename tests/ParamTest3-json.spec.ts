import { test, expect } from '@playwright/test';

import  fs from 'fs';

//Reading data from json file
const jsonPath="testdata/data.json";
const loginTestData:any = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
test.describe("login data driven test", async() => {


for (const {email, password, validity} of loginTestData) {

    

        test(`login test for ${email} and ${password}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/login");
            await page.locator("#Email").fill(email);
            await page.locator("#Password").fill(password);
            await page.locator("input[value='Log in']").click();

            if(validity.toLowerCase() === "valid")
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

