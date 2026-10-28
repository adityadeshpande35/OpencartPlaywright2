import { test, expect,Locator} from '@playwright/test';
test(" XPath demo in playwright",async ({ page }) => {

    await page.goto("https://www.w3schools.com/html/html_tables.asp");


    //1.self axis
    const germanyCell:Locator=page.locator("//td[text()='Germany']/self::td");
    await expect(germanyCell).toHaveText("Germany");

    //2.parent axis
    const parentrow:Locator=page.locator("//td[text()='Germany']/parent::tr");
    await expect(parentrow).toContainText("Maria Anders");
    await expect(parentrow).toContainText("Alfreds Futterkiste Maria Anders Germany");
    console.log(await parentrow.textContent());

    //3.child axis
    const secondRowCells:Locator=page.locator("//table[@id='customers']//tr[2]/child::td");
    await expect(secondRowCells).toHaveCount(3);
    
    //4.anscestor axis
    const table:Locator=page.locator("//td[text()='Germany']/ancestor::table");
    await expect(table).toHaveAttribute("id","customers");

    //descendant axis
    const allTds:Locator=page.locator("//table[@id='customers']/descendant::td");
    await expect(allTds).toHaveCount(18);

    //following axis
    const followingCell:Locator=page.locator("//td[normalize-space()='Germany']/following::td[1]");
    await expect(followingCell).toHaveText("Centro comercial Moctezuma");

    //following-sibling axis
    const rightsiblings:Locator=page.locator("//td[normalize-space()='Germany']/following-sibling::td");
    await expect(rightsiblings).toHaveCount(0);

  const rightsiblings1:Locator=page.locator("//td[normalize-space()='Maria Anders']/following-sibling::td");
    await expect(rightsiblings1).toHaveCount(1);

    //preceding axis

    const precedingCell:Locator=page.locator("//td[normalize-space()='Germany']/preceding::td[1]");
    await expect(precedingCell).toHaveText("Maria Anders");

    //preceding-sibling axis
    const leftsiblings:Locator=page.locator("//td[normalize-space()='Germany']/preceding-sibling::td");
    await expect(leftsiblings).toHaveCount(2); 
   await expect(leftsiblings.nth(0)).toHaveText("Alfreds Futterkiste");
    await expect(leftsiblings.nth(1)).toHaveText("Maria Anders");



})