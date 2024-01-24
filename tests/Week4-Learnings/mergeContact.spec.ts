import { test } from "@playwright/test";

//1. MergeContact (Alert and windowHandle)
// -----------		  
// 1. Launch URL "http://leaftaps.com/opentaps/control/login"
// 2. Enter UserName and Password Using Id Locator
// 3. Click on Login Button using Class Locator
// 4. Click on CRM/SFA Link
// 5. Click on contacts Button
// 6. Click on Merge Contacts using Xpath Locator
// 7. Click on Widget of From Contact
// 8. Click on First Resulting Contact
// 9. Click on Widget of To Contact
// 10. Click on Second Resulting Contact
// 11. Click on Merge button using Xpath Locator
// 12. Accept the Alert
// 13. Verify the title of the page

test.only('Merge contact', async({page,context}) => {  
    test.setTimeout(90000);
    page.goto("http://leaftaps.com/opentaps/control/main");
    await page.waitForLoadState('load');
    await page.getByLabel("username").fill("Demosalesmanager");
    await page.getByLabel("password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.waitForLoadState('load');
    await page.getByText('CRM/SFA').click();
    await page.locator('.frameSectionHeader a').filter({hasText: 'Contacts'}).click();
    await page.waitForLoadState('load');
    await page.locator('.frameSectionBody a').filter({hasText: 'Merge Contacts'}).click();
    await page.waitForLoadState('load');

    const [fromContact] = await Promise.all([
        context.waitForEvent('page'),
        await page.locator("//input[@id='partyIdFrom']//following::a[1]").click(),
    ]);
    fromContact.waitForTimeout(10000);
    await fromContact.locator(".linktext").first().click();

    const [toContact] = await Promise.all([
        context.waitForEvent('page'),
        await page.locator("//input[@id='partyIdTo']//following::a[1]").click(),
    ]);

    toContact.waitForTimeout(10000);
    await toContact.locator(".linktext").last().click();
    await page.locator('.buttonDangerous').filter({hasText: 'Merge'}).click();
        

});