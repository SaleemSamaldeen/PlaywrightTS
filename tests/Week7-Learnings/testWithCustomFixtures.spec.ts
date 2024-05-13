import { test } from "./customFixtures.spec";

test.describe(`Salesforce login`,async()=>{

    test.use({actionTimeout:10000})
    test(`Login to salesforce`,async({page})=>{  
        await page.locator(".slds-icon-waffle").click();
        await page.getByLabel("View All Applications").click();
    })
})