import {test as baseTest} from '@playwright/test';

// common fixture at the beginning of the test
export const test = baseTest.extend({
    page:async ({page}, use) => {
        await page.goto("https://login.salesforce.com/");
        await page.fill("#username","saleem@testleaf.com");
        await page.fill("#password","Shazia@23")
        await page.click("#Login")
        await page.waitForLoadState('load');

        await use(page); //To customize the test
    }
})