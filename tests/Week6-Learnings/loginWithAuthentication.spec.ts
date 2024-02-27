import test, { chromium, firefox } from "@playwright/test";

    test(`Login using basic authentication`, async() => {
    const directory = './myUserDataDir';
    const context =  await chromium.launchPersistentContext(directory, {
        headless: false,
        httpCredentials:{
            username:'admin',
            password:'testleaf',
            origin: "https://leafground.com/auth.xhtml" //only for this website we are suppose to use the httpcredentials
        }
    })
    const page = await context.newPage();
    await page.goto('https://leafground.com/auth.xhtml');
    await page.waitForLoadState('load');
    await page.getByRole('button', {name: 'Basic Auth'}).click();
    await page.close();
    await context.close();
});

