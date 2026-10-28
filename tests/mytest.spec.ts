import {test,expect} from '@playwright/test';
test('verify page title', async ({page}) => {

    await page.goto('http://www.automationpractice.pl/index.php');
    let title :string= await page.title();
    console.log("Page Title is: "+title);
    await expect(page).toHaveTitle('My Shop');


})