import test, { chromium, expect } from "@playwright/test";

test('Handle windows', async({page, context}) => {
    let secondPage: any;
    test.setTimeout(90000);
    await page.goto('https://login.salesforce.com');
    await page.waitForLoadState('load');
    await page.fill('#username','saleem@testleaf.com');
    await page.fill('#password','Shazia@23');
    await page.click('#Login');
    await page.waitForLoadState('load');
    // to wait for new tab
    const newTab = context.waitForEvent('page');
    // click the link which opens a new tab
    await page.click('button[title="Learn More"]');
    // wait for newTab promise to open 
    await newTab;
    const allPages = context.pages();
    await Promise.all(allPages.map(async (newPage) => {
        await newPage.waitForLoadState('load');
        if (await newPage.title() === '') {
            await newPage.bringToFront();
            secondPage = newPage;
        }
    }));

     // Example: interact with an element on the second page using a locator
     if (secondPage) {
        await secondPage.locator('button').filter({hasText: 'Confirm'}).click();
        await secondPage.locator('#onetrust-accept-btn-handler').click();
        console.log(await secondPage.title());
        await expect(secondPage).toHaveTitle(`Create and Publish Custom-Branded Mobile Apps - Salesforce.com`);
     }
      await page.bringToFront();
      await expect(page).toHaveTitle(`Home | Salesforce`);
      
});

test('Handle windows using promise all', async({page, context}) => {

    test.setTimeout(90000);
    await page.goto('https://login.salesforce.com');
    await page.waitForLoadState('load');
    await page.fill('#username','saleem@testleaf.com');
    await page.fill('#password','Shazia@23');
    await page.click('#Login');
    await page.waitForLoadState('load');
    const [newPages] = await Promise.all([
        await context.waitForEvent('page'), //listener
        await page.click('title="Learn More"')
    ]);


});