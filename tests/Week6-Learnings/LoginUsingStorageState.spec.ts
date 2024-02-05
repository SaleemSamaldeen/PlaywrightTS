import test, { chromium, expect } from "@playwright/test";
import path from "path";

console.log(path.join(__dirname,'sfLoginData.json'));
test.use({storageState:path.join(__dirname,'../storeData/sfLoginData.json')});
test('Login Using saved Storage State', async({page}) => {
    await page.goto("https://testleaf-12a-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
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
    console.assert
});