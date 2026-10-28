import{test,expect} from '@playwright/test';

test("Visual Testing",async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/");
//await page.goto("https://demowebshop.tricentis.com/register");

    //compare snapshot of the page

    //Approach1
    //expect(await page.screenshot()).toMatchSnapshot("homepage.png");

    //Approach2
    await expect(page).toHaveScreenshot();

    //compare snapshot of an element
    const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
    expect(await logo.screenshot()).toMatchSnapshot("logo.png");



})