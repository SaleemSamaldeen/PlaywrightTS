import test, { chromium } from "@playwright/test";
import path from 'path';
import dotenv from 'dotenv';


dotenv.config({ path: '.test.env' }); 

    test.only(`Login using dotenv and persistent context`, async() => {
    const directory = path.resolve('./UserDataDirectory');
    const context =  await chromium.launchPersistentContext(directory, {
        headless: false
    })
    const page = await context.newPage();
    await page.goto('https://login.salesforce.com');
    await page.waitForLoadState('load');
    //await page.fill('#username',process.env.test.username as string);
    //await page.fill('#password',process.test.env.password as string);
    await page.click('#Login');
    await page.waitForLoadState('load');
    await page.close();
    await context.close();
});

