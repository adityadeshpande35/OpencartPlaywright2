import { test, expect,Locator} from '@playwright/test';

test("frames demo",async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frames=page.frames();
    console.log("Number of frames present in the page:",frames.length);


    //---Approcha1:- using page.frame()----

    /*const frame=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});

    if(frame)
{
    await frame.locator("[name='mytext1']").fill("Hello");
    //await frame.fill("[name='mytext1']","Hello");
}
else
{
    console.log("Frame is not available");
}*/

//---Approacha2:- using page.frameLocator()----
const inputBox= page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']");
await inputBox.fill("Hello");






})

test.only("Inner/child frames demo",async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame3=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});

    if(frame3)
{
    await frame3.locator("[name='mytext3']").fill("Welcome");
    const childFrames=frame3.childFrames();
    console.log("Number of child frames inside frame3:",childFrames.length);
    const radio=childFrames[0].getByLabel("I am a human");
    await radio.check();
    await expect(radio).toBeChecked();

}
   
else
{
    console.log("Frame3 is not available");
}






})