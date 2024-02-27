import test, { chromium } from "@playwright/test";
import { ENVIRONMENT} from "../utils/env";

    test(`Login using dotenv and environment variables`, async({page}) => {
    console.log(ENVIRONMENT.USERNAME);
    console.log(ENVIRONMENT.PASSWORD);
    
    await page.goto(ENVIRONMENT.BASEURL as string);
    await page.waitForLoadState('load');
    await page.fill('#username', ENVIRONMENT.USERNAME as string);
    await page.fill('#password', ENVIRONMENT.PASSWORD as string);
    await page.click('#Login');
    await page.waitForLoadState('load');
});

