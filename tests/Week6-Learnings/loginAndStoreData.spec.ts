import test, { chromium, expect } from "@playwright/test";


test.only('Create Lead in salesforce and store storage state', async({page}) => {
    test.setTimeout(90000);
    await page.goto('https://login.salesforce.com');
    await page.waitForLoadState('load');
    await page.fill('#username','saleem@testleaf.com');
    await page.fill('#password','Shazia@23');
    await page.click('#Login');
    await page.context().storageState({path:'../storeData/sfLoginData.json'})
});