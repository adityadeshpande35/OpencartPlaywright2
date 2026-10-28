import {test,expect} from '@playwright/test';
test('verify page url', async ({page}) => {

    await page.goto('http://www.automationpractice.pl/index.php');
    let url :string= await page.url();
    console.log("Page url is: "+url);
    await expect(page).toHaveURL(/automationpractice/);


})