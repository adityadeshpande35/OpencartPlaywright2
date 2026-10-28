import{test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test("Accessibility Testing",async({page},testInfo)=>

    {
        //await page.goto("https://demowebshop.tricentis.com/");

        await page.goto("https://www.w3.org/");

        // 1) scanning and detect all type of WCAG violations
       // const accessibilityScanResults=await new AxeBuilder({page}).analyze();
       // console.log(accessibilityScanResults);
      //  console.log("Number of accessibility violations:",accessibilityScanResults.violations.length);
      //  expect(accessibilityScanResults.violations).toEqual([]);
      //  expect(accessibilityScanResults.violations.length).toEqual(0);

        //2)scanning for few WCAG violations
       // const accessibilityScanResults=await new AxeBuilder({page}).withTags(["wcag2a","wcag2aa","wcag21a","wcag21aa"]).analyze();

        //3)scanning for few WCAG violations with rules
        const accessibilityScanResults=await new AxeBuilder({page}).disableRules(['duplicate-id']).analyze();

//console.log("Number of accessibility violations:",accessibilityScanResults.violations.length);

await testInfo.attach("Accessibility Scan Results",{
    body: JSON.stringify(accessibilityScanResults, null, 2),
    contentType: "application/json"

});

expect(accessibilityScanResults.violations.length).toEqual(0);

    })