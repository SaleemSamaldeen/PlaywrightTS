import test, { chromium, expect } from "@playwright/test";

/* 
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name */

test('Create Lead in salesforce', async() => {
    test.setTimeout(120000);
    const browserInitiate = await chromium.launch();
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
    await page.click('div[title="New"]');
    await page.fill('input[placeholder="Last Name"]','testLeaf');
    await page.click('button[title="Save"]');
    await page.waitForLoadState("load");
    const result = await page.locator('header span.uiOutputText').innerText();
    expect(result).toBe('testLeaf')
});