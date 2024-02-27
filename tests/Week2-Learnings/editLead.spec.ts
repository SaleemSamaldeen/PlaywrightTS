import test, { chromium, firefox } from "@playwright/test";

/* 
Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/

test.only("Edit Lead", async()=>{
    test.setTimeout(120000);
    const browser = await chromium.launch({channel:"chrome", headless:false})
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    page.goto("http://leaftaps.com/opentaps/control/main");
    await page.waitForLoadState('load');
    await page.getByLabel("username").fill("Demosalesmanager");
    await page.getByLabel("password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.waitForLoadState('load');
    await page.getByText('CRM/SFA').click();
    await page.waitForLoadState('load');
    await page.getByRole('link', { name: 'Leads' }).click();
    await page.getByRole('link', { name: 'Create Lead' }).click();
    await page.fill("#createLeadForm_companyName","CompanyName");
    await page.fill("#createLeadForm_firstName","FirstName"); 
    await page.fill("#createLeadForm_lastName", "LastName");
    await page.click(".smallSubmit");
    await page.waitForLoadState('load');
    await page.click("//a[text()='Edit']");
    await page.locator("#updateLeadForm_companyName").clear();
    await page.fill("#updateLeadForm_companyName","TestLeaf Software");
    await page.click(".smallSubmit");
});