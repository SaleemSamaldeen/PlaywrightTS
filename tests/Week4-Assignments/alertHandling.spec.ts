import test, { chromium, expect } from "@playwright/test";

test('Handle Alerts', async( {page}) => {
    test.setTimeout(90000);
    await page.goto('https://www.leafground.com/alert.xhtml;jsessionid=node0wiovd2y7sd9htn0xqshjjjni10707.node0');
    await page.waitForLoadState('load');
    page.on('dialog', async (dialog) =>{
        dialog.accept();
    });

});