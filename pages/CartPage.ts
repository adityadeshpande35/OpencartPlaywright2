import{Page,Locator} from '@playwright/test';

export class cartPage
{
    private  page:Page;
    private  productNamesInCart:Promise<Array<Locator>>;

    constructor(page:Page)
    {
        this.page=page;
        this.productNamesInCart=this.page.locator('#tbodyid tr td:nth-child(2)').all();
    }

    async checkProductInCart(productName:string):Promise<boolean>
    {
        const products=await this.productNamesInCart;
        for(const product of products)
        {
            const name:any=(await product.textContent())?.trim();
            console.log("Product in cart:",name);
            if(name?.trim()===productName)
            {
                return true;
            }
        }
        return false;
    }
}