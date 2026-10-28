import{Page,Locator} from '@playwright/test';

export class LoginPage
{
    //define the variables -private and readonly
    private readonly page:Page;
    private readonly loginlink:Locator;
    private readonly usernameInput:Locator;
    private readonly passwordInput:Locator;
    private readonly loginButton:Locator;

    //constructor

    constructor(page:Page)
    {
        this.page=page;
        this.loginlink=page.locator('#login2');
        this.usernameInput=page.locator('#loginusername');
        this.passwordInput=page.locator('#loginpassword');
        this.loginButton=page.locator('button[onclick="logIn()"]');

    }

//Action method
async clickLoginLink():Promise<void>
{
    await this.loginlink.click();
}

async enterUsername(username:string):Promise<void>
{
    await this.usernameInput.clear();
    await this.usernameInput.fill(username);
}

async enterPassword(password:string):Promise<void>
{
    await this.passwordInput.clear();
    await this.passwordInput.fill(password);
}

async clickLoginButton():Promise<void>
{
    await this.loginButton.click();
}

async performLogin(username:string,password:string):Promise<void>
{
    await this.clickLoginLink();
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();  
}
}