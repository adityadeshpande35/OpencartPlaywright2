import {test,expect,Page} from '@playwright/test';
let page:Page;

test.beforeAll('open  app',async({browser})=>
{
    page=await browser.newPage();
    await page.goto("https://www.demoblaze.com/index.html");

})
test.afterAll('close app',async()=>
{
    await page.close();
})
test.beforeEach('login to app',async()=>
{
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill("pavanol");
    await page.locator('#loginpassword').fill("test@123");
    await page.locator("button[onclick='logIn()']").click();
    await page.waitForTimeout(2000);

})
test.afterEach("logout",async()=>
{
    await page.locator('#logout2').click();
})

test.describe('mygroup',()=>
{


test("find no of products",async()=>
{
    const products=await page.locator('.hrefch');
    const count=await products.count();
    console.log("no of products are "+count);
    await expect(products).toHaveCount(9);

})
test("add products to cart",async()=>
{
    await page.locator("text=Samsung galaxy s6").first().click();
   page.on('dialog',async(dialog)=>
   {
    expect(dialog.message()).toBe("Product added");
    await dialog.accept();
   });
   await page.locator(".btn.btn-success.btn-lg").click();

})

})