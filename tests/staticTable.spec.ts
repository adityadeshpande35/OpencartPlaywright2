import { test, expect,Locator} from '@playwright/test';
test("static Web Table Handling",async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //verify table is visible

    const table:Locator=page.locator("table[name='BookTable'] tbody");
    await expect(table).toBeVisible();

    //verify no of rows 

    const rows:Locator=table.locator("tr");
    await expect(rows).toHaveCount(7);

    const rowCount:number=await rows.count();
    console.log("Number of rows in the table:",rowCount);
    expect(rowCount).toBe(7);

    //verify no of columns

    const colums:Locator=rows.locator("th");
    await expect(colums).toHaveCount(4);


    const columCount:number=await colums.count();
    console.log("number of columns heades in the table:",columCount);
    expect(columCount).toBe(4);


    //3. read all data from 2nd row (index 2 means 3rd row including header row)
    const secondRowCells:Locator=rows.nth(2).locator("td");
    const secondRowText:string[]=await secondRowCells.allInnerTexts();
    console.log("Data from 2nd row:",secondRowText);
    await expect(secondRowCells).toHaveText(["Learn Java","Mukesh","Java","500"]);
    console.log("printing 2nd row data...");
    for(const cellText of secondRowText)
    {
        console.log(cellText);
    }   

    // 4) read all data from the table excluding header row

    console.log("printing all table data...");

    const allRowData=await rows.all(); //get all row locators //all() returns array of locators
    console.log("BookName Subject Author Price");
    for(const row of allRowData.slice(1)) //excluding header row
    {
        const cols=await row.locator("td").allInnerTexts();
        console.log(cols.join('\t'));
    }
    
//5.print book names whose author is mukesh
console.log("Books written by Mukesh:");

const mukeshBooks:string[]=[];

for(const row of allRowData.slice(1)) //excluding header row
    {
        const cells=await row.locator("td").allInnerTexts();
        const bookName=cells[0];
        const author=cells[1];
        if(author==="Mukesh")
        {
            console.log(`${bookName}  \t ${author}`);
            mukeshBooks.push(bookName);
        }
        
    }
    
    expect(mukeshBooks).toHaveLength(2);
    

    //6.calculate total price of all books
    let totalPrice:number=0;
    for(const row of allRowData.slice(1)) //excluding header row
    {
        const cells=await row.locator("td").allInnerTexts();
        const price=cells[3];
        totalPrice=totalPrice + parseInt(price);
        
    
        
    }
    console.log("Total price of all books:",totalPrice);
    expect(totalPrice).toBe(7100);

})