import test, { } from "@playwright/test";
import path from "path";

// SalesForce -Accounts (upload files)
// -----------------------------------
// 1.Login to Salesforce
// 2.Click on toggle menu
// 3.Search for Accounts
// 4.Click the Accounts
// 5.Click on the first resulting account name
// 6.Upload files under Notes and Attachments 
//   Hint : use page.focus(selector) to scroll to view the element - uploadfiles 
// 7.Verify the toast message

test('Upload files', async({page}) => {
    test.setTimeout(90000);
    await page.goto('https://login.salesforce.com');
    await page.waitForLoadState('load');
    await page.fill('#username','saleem@testleaf.com');
    await page.fill('#password','Password@23');
    await page.click('#Login');
    await page.click("div[class='slds-icon-waffle']");
    await page.waitForLoadState('load');
    await page.getByPlaceholder('Search apps and items...').fill('Account');
    await page.locator('#Account').click();
    await page.waitForLoadState('load');
    await page.locator('//table//tbody//tr[1]//th//a').click();
    await page.waitForLoadState('load');
   // await page.keyboard.press('ArrowDown');
   // await page.keyboard.press('ArrowDown');
   //await page.locator('//span[@title="Notes & Attachments"]').focus();
   //const upload = page.locator('//span[@title="Notes & Attachments"]');
   //await page.locator('//a[@title="Upload Files"]').scrollIntoViewIfNeeded({timeout:10000});
   await page.evaluate(() => {
    window.scrollBy(0,300);
   });
   page.on('filechooser', async (fileChooser) => {
    // give file path location
    //await fileChooser.setFiles('C:/Users/salee/TestLeafDec23/PlaywrightTasks/JavascriptTasks/uploadFiles/SalesforceAccountSetup.pdf', {timeout:10000});
    
    // give directory name and filename alone
    console.log('file path: '+ path.join(__dirname,'SalesforceAccountSetup.pdf'))
    await fileChooser.setFiles([path.join(__dirname,'SalesforceAccountSetup.pdf')], {timeout:10000});   
})
   await page.locator('//a[@title="Upload Files"]').click();
   await page.waitForTimeout(5000);;
   await page.locator("//span[text()='Done']").click();
});