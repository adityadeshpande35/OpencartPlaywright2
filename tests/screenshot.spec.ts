import{test,expect} from '@playwright/test';
test("Screenshot Demo",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    const timestamp=Date.now();

    //page screenshot
    //await page.screenshot({path:'screenshots/'+timestamp+'.png'});


    //full page screenshot
    //await page.screenshot({path:'screenshots/'+timestamp+'-fullpage.png',fullPage:true});

    //element screenshot
    //const logo = page.locator("img[alt='Tricentis Demo Web Shop']");
    //logo.screenshot({path:'screenshots/'+timestamp+'-logo.png'});
//await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({path:'screenshots/'+timestamp+'-logo.png'});

await page.locator('.product-grid.home-page-product-grid').screenshot({path:'screenshots/'+timestamp+'-productgrid.png'});



})

test.only("screenshots from config",async({page})=>{

await page.goto("https://www.demoblaze.com/index.html");
await page.getByRole('link', { name: 'Log in' }).click();
await page.locator('#loginusername').fill('pavnol');
await page.locator('#loginpassword').fill('test@1235');
await page.getByRole('button', { name: 'Log in' }).click();
await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
await expect(page.locator('#nameofuser')).toContainText('Welcome pavnol');


})