import{test,expect} from '@playwright/test';



test.only("tracing test",async({page,context})=>{

    

await page.goto("https://www.demoblaze.com/index.html");
await page.getByRole('link', { name: 'Log in' }).click();
await page.locator('#loginusername').fill('pavnol');
await page.locator('#loginpassword').fill('test@123');
await page.getByRole('button', { name: 'Log in' }).click();
await page.waitForTimeout(10000);
await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
await expect(page.locator('#nameofuser')).toContainText('Welcome pavnol');



})