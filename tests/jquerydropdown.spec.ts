import { test, expect,Locator,Page} from '@playwright/test';


async function selectDate(targetYear: string,targetMonth: string,targetDate: string,page:Page,isFuture:boolean) {

 while(true)
    {
        const currentMonth=await page.locator(".ui-datepicker-month").innerText();
        const currentYear=await page.locator(".ui-datepicker-year").innerText();

        if(currentMonth===targetMonth && currentYear===targetYear)

            {
                break;

            }

            if(isFuture)
            {
                   //future
                await page.locator(".ui-datepicker-next").click();

            }
            else
            {
                 //prev
             await page.locator(".ui-datepicker-prev").click();
            }

         

       


    }
    //select day
    const allDates=await page.locator(".ui-datepicker-calendar td ").all();

    for(let dt of allDates)
    {
        const dateText=await dt.innerText();
        if(dateText===targetDate)
        {
            await dt.click();
            break;
        }
    }



}

test("jquery datepicker",async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const dateInput:Locator=page.locator("#datepicker");
    expect(dateInput).toBeVisible();

    //using fill method
   // dateInput.fill("12/25/2024");

    //using date picker
    await dateInput.click();

    //select Future target date
/*
    const year="2027";
    const month="February";
    const date="18";
*/

     //select Past target date

    const year="2016";
    const month="May";
    const date="25";

    selectDate(year,month,date,page,false);

    const expepectedDate='05/25/2016';
    await expect(dateInput).toHaveValue(expepectedDate);

   





})