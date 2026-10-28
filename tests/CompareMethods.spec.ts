import { test, expect,Locator} from '@playwright/test';
test("Comparing Methods",async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    const products:Locator=page.locator(".product-item");

    //1) inner Text vs text Content

   // console.log(await products.nth(1).innerText());
    // console.log(await products.nth(1).textContent());

     const count=await products.count();

     for(let i=0;i<count;i++)
     {
        //const productName:string =await products.nth(i).locator("h2").innerText();
       // console.log(productName);

        //const productName:string | null=await products.nth(i).textContent();
       // console.log(productName);

        //const productName:string | null=await products.nth(i).textContent();
        //console.log(productName?.trim());




     }
   // 2) all Text Contents vs all Inner Texts
   // console.log("*** comparing allTextContents vs allInnerTexts***");
    //const productNames:string[]=await products.allInnerTexts();
    //console.log("Product names  captured using allInnerTexts():", productNames);

   // const productNames:string[]=await products.allTextContents();
   // console.log("Product Names  captured by  allTextContents():", productNames);

    //const productNamesTrimmed:string[]=productNames.map(name=>name.trim());
   // console.log("Product Names after trimmed", productNamesTrimmed);


   //3) all() converts Locator --> Locator[]
   const productLocators:Locator[]=await products.all();
   console.log(productLocators);
   
   console.log(await productLocators[1].innerText());

 /*  for(const productloc of productLocators)
    {       
        console.log(await productloc.innerText());
    }*/

        for(let i in  productLocators)
        {
            console.log(await productLocators[i].innerText());

        }





}) 