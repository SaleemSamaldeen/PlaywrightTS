import test, { chromium } from "@playwright/test";
import { Environment } from "../utils/env";

    test(`Login using dotenv and environment variables`, async({page}) => {
    await page.goto(Environment.baseURL as string);
    await page.waitForLoadState('load');
    await page.fill('#username', Environment.userName as string);
    await page.fill('#password', Environment.passWord as string);
    await page.click('#Login');
    await page.waitForLoadState('load');
});

