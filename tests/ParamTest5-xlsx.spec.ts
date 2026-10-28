import { test, expect } from '@playwright/test';

import  fs from 'fs';
import {parse} from 'csv-parse/sync';
import * as XLSX from 'xlsx';

//Reading data from xlsx file
const excelPath="testdata/data.xlsx";
const workbook = XLSX.readFile(excelPath);
const sheetNames= workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetNames];


const logindata:any = XLSX.utils.sheet_to_json(worksheet);
console.log(logindata);



//Reading data from xlsx file





test.describe("login data driven test", async() => {




for (const {email, password, validity} of logindata) {

    

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