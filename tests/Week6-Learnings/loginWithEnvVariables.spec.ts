import test, { chromium } from "@playwright/test";
import { Environment} from "../utils/env";
import { log } from "console";

    test(`Login using dotenv and environment variables`, async({page}) => {
    console.log(Environment.userName);
    console.log(Environment.passWord);
    
    await page.goto(Environment.baseURL as string);
    await page.waitForLoadState('load');
    await page.fill('#username', Environment.userName as string);
    await page.fill('#password', Environment.passWord as string);
    await page.click('#Login');
    await page.waitForLoadState('load');
});

