import {test,expect, Locator} from "@playwright/test" ;
test("Booking.com datepicker test check-in and check-out", async ({ page }) => {

    await page.goto("https://www.booking.com/");

    const closeBtn = page.getByRole('button', { name: 'Dismiss sign-in info' });
      await closeBtn.click();
    await page.getByTestId("date-display-field-start").click();

    let cheInYear:string="2027";
    let cheInMonth:string="February";
    let checkInDate:string="18";

    while (true) 
        {

            const checkInMonthYear=await page.locator("h3[aria-live='polite']").first().innerText();
            const currentMonth=checkInMonthYear.split(" ")[0].trim();
            const currentYear=checkInMonthYear.split(" ")[1].trim();

            if(currentMonth===cheInMonth && currentYear===cheInYear)
            {
                break;

            }
            else
            {
                await page.locator('button[aria-label="Next month"]').click();
            }
        }

            
        let allDates=await page.locator("table.b8fcb0c66a tbody").nth(0).locator("td").all();
        let checkInDateSelected=false;

        for(let date of allDates)
        {
            const dateText=await date.innerText();
            if(dateText===checkInDate)
                {
                    await date.click();
                    checkInDateSelected=true;
                    break;
                }
        
        }
        expect(checkInDateSelected).toBeTruthy();



await page.getByTestId("date-display-field-start").click();
    let cheOutYear:string="2027";
    let cheOutMonth:string="March";
    let checkOutDate:string="18";

    while (true) 
        {

            const checkOutMonthYear=await page.locator("h3[aria-live='polite']").first().innerText();
            const currentMonth=checkOutMonthYear.split(" ")[0].trim();
            const currentYear=checkOutMonthYear.split(" ")[1].trim();

            if(currentMonth===cheOutMonth && currentYear===cheOutYear)
            {
                break;

            }
            else
            {
                await page.locator('button[aria-label="Next month"]').click();
            }
        }

            
         allDates=await page.locator("table.b8fcb0c66a tbody").nth(0).locator("td").all();
        let checkoutDateSelected=false;

        for(let date of allDates)
        {
            const dateText=await date.innerText();
            if(dateText===checkInDate)
                {
                    await date.click();
                    checkoutDateSelected=true;
                    break;
                }
        
        }
        expect(checkInDateSelected).toBeTruthy();

})