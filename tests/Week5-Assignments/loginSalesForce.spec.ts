import test from "@playwright/test";
import loginData from "../../test-data/loginData.json";

test('Login with test data json file', async({page,context}) => {
    console.log(loginData);
    await page.goto('https://login.salesforce.com');
    await page.waitForLoadState('load');
    await page.fill('#username',loginData.username);
    await page.fill('#password',loginData.password);
});