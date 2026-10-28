import { test, expect} from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { cartPage } from '../pages/CartPage';


test ("user can login and add product to cart",async ({page})=>
{

    await page.goto("https://www.demoblaze.com/index.html");

    const loginPage=new LoginPage(page);
    /*await loginPage.clickLoginLink();
    await loginPage.enterUsername("pavanol");
    await loginPage.enterPassword("test@123");
    await loginPage.clickLoginButton();*/
    await loginPage.performLogin("pavanol","test@123");
    const homePage=new HomePage(page);
    await homePage.addProductToCart("Samsung galaxy s6");
    await page.waitForTimeout(2000);
    await homePage.goToCart();
     await page.waitForTimeout(2000);
    const cartpage=new cartPage(page);
    const isProductInCart=await cartpage.checkProductInCart("Samsung galaxy s6");
     await page.waitForTimeout(2000);
    expect(isProductInCart).toBe(true)



})

