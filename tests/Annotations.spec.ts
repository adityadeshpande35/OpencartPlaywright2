import{test,expect} from '@playwright/test';

//1.only
test("test1",async({page})=>
{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");

})

//2.skip
test.skip("test2",async({page})=>
{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");

})

//3.skip based on condition

test("test3",async({page,browserName})=>
{
    test.skip(browserName==="firefox","this test is skipped if browser is firefox");
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");

})

//4.fail
test.fail("test4",async({page})=>
{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");

})

//5.fixme
test.fixme("test5",async({page})=>
{
    await page.goto("https://www.google.com/");
    //no assertion

})

//6.slow
test("test6",async({page})=>
{
    test.slow();
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");

})