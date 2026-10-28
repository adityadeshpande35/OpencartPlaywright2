import { test, expect,Locator} from '@playwright/test';
test(" XPath demo in playwright",async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    //Absolute xpath-logo
    const absoluteLogo: Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await expect(absoluteLogo).toBeVisible();
    //Relative Xpath-logo
    const relativeLogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(relativeLogo).toBeVisible();   

    //contains()
    const products:Locator=page.locator("//h2//a[contains(@href,'computer')]");

    const productsCount:number=await products.count();
    console.log("Number of computer related product:",productsCount);
    expect(productsCount).toBeGreaterThan(0);

    //console.log(await products.textContent()); //error:strict mode violation:Locator resolved to multiple elements

    console.log("first computer related product:",await products.first().textContent());
    console.log("last computer related product:",await products.last().textContent());
    console.log("nth computer related product:",await products.nth(1).textContent());

    let productTitles:String[]=await products.allTextContents();
    for(let title of productTitles){
        console.log(title);
    }

    //starts-with()
    const buildignProducts:Locator=page.locator("//h2//a[starts-with(@href,'/build')]");
    const count:number=await buildignProducts.count();
    expect(count).toBeGreaterThan(0);

    //text()
    const regLink:Locator=page.locator("//a[text()='Register']");
    await expect(regLink).toBeVisible();

    //last()
    const lastitem:Locator=page.locator("//div[@class='column follow-us']//li[last()]");
    await expect(lastitem).toBeVisible();
    console.log("Text content of last item:",await lastitem.textContent());

    //position()
    const positionItem:Locator=page.locator("//div[@class='column follow-us']//li[position()=3]");
    await expect(positionItem).toBeVisible();
    console.log("Text content of second item:",await positionItem.textContent());

    



})