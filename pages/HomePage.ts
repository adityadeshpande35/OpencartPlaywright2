import{Page,Locator} from '@playwright/test';

export class HomePage
{
    private readonly page:Page;
    private readonly productsList:Promise<Array<Locator>>;
    private readonly addToCartbutton:Locator;
    private readonly cartLink:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.productsList=this.page.locator('div#tbodyid div.card h4.card-title a').all();
        this.addToCartbutton=this.page.locator('a:has-text("Add to cart")');
        this.cartLink=this.page.locator('#cartur');

    }

    async addProductToCart(productName:string):Promise<void>
    {
        const productElements=await this.productsList;
        for(const productElement of productElements)
        {
            const name=await productElement.textContent();
            if(name?.trim()===productName)
            {
                await productElement.click();
                break;
            }
        }

        this.page.once('dialog',async dialog=>
        {
            if(dialog.message().includes('added'))
            await dialog.accept();
        });

        await this.addToCartbutton.click();
    }
    async goToCart():Promise<void>
    {
        await this.cartLink.click();
    }

}