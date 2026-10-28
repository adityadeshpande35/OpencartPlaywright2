import {test,expect, Locator} from "@playwright/test" ;

test("scrolling to footer", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");  

    const footerText:string=await page.locator(".footer-disclaimer").innerText();

    console.log("Footer Text captured :",footerText);

})

test("scrolling inside dropdown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/"); 

    await page.locator("#comboBox").click();

    const option=await page.locator("#dropdown div:nth-child(100)");

    console.log("Option captured:",await option.innerText());

    await option.click();


})


test.only('Scrolling inside the table', async ({ page }) => {
  await page.goto('https://datatables.net/examples/basic_init/scroll_xy.html');

  const name=await page.locator('tbody tr:nth-child(10) td:nth-child(2)').innerText(); //Automatic scrolling - vertical
  console.log("Last Name from 10th Row & 2nd Column :", name); //Kelly

  const email=await page.locator('tbody tr:nth-child(10) td:nth-child(9)').innerText(); //Automatic scrolling - Horizantal
  console.log("Email from 10th Row & 9th Column :", email); //c.kelly@datatables.net

});