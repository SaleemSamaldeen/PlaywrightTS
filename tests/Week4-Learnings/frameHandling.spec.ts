import test, { chromium } from "@playwright/test";

test('Handle Frames', async({page}) => {
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');
    await page.locator('#accept-choices').click();
    await page.waitForLoadState('load');
    const frame = page.frameLocator('#iframeResult');
    frame.locator('button').filter({hasText:'Try it'}).click();
    await page.waitForTimeout(5000);  
});