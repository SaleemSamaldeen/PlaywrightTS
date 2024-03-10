import test, { chromium, expect } from "@playwright/test";

/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created}
*/

test('Create Lead in salesforce', async() => {
    test.setTimeout(90000);
    const browserInitiate = await chromium.launch({channel:'chrome', headless:false});
    const browserContext = await browserInitiate.newContext();
    const page = await browserContext.newPage();
    await page.goto('https://login.salesforce.com');
    await page.waitForLoadState('load');
    await page.fill('#username','saleem@testleaf.com');
    await page.fill('#password','Password@23');
    await page.click('#Login');
    await page.click("div[class='slds-icon-waffle']");
    await page.waitForLoadState('load');
    await page.click("//button[text()='View All']");
    await page.waitForLoadState('load');
    await page.click("div[data-name='Sales'] a");
    await page.click("a[title='Leads']");
    await page.click("//button[contains(@class,'middleButton actionListButton')]");
    await page.click('button[name="salutation"]');
    await page.click('lightning-base-combobox-item[data-value="Mr."]');
    await page.fill('input[name="firstName"]', 'Test');
    await page.fill('input[name="lastName"]', 'Leaf');
    await page.fill('input[name="Company"]','Salesforce');
    await page.click('button[name="SaveEdit"]');
    const finalName = await page.locator('lightning-formatted-name[slot="primaryField"]').innerText();
    expect(finalName).toBe('Mr. Test Leaf');
});