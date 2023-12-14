import test, { chromium, expect } from "@playwright/test";

/* Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name */



test.only('Edit Individuals in salesforce', async() => {
    test.setTimeout(120000);
    const browserInitiate = await chromium.launch({channel:'chrome', headless:false});
    const browserContext = await browserInitiate.newContext();
    const page = await browserContext.newPage();
    await page.goto('https://login.salesforce.com');
    await page.waitForLoadState('load');
    await page.fill('#username','saleem@testleaf.com');
    await page.fill('#password','Shazia@23');
    await page.click('#Login');
    await page.click("div[class='slds-icon-waffle']");
    await page.waitForLoadState('load');
    await page.click("//button[text()='View All']");
    await page.waitForLoadState('load');
    await page.getByText("Individuals").click();
    await page.waitForLoadState("load");
    await page.click("//table[contains(@class,'uiVirtualDataTable')]//tbody//tr[1]//th[1]//a");
    await page.click("a[title='Edit']");
    await page.click("//div[contains(@class,'salutation ')]//a");
    await page.click('a[title="Mr."]');
    await page.fill('input[placeholder="First Name"]','Individual');
    await page.click('button[title="Save"]');
    await page.waitForLoadState("load");
    const result = await page.locator('header span.uiOutputText').innerText();
    expect(result).toBe('Mr. Individual testLeaf')
});