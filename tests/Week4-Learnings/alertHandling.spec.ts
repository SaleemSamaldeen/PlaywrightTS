import test, { chromium, expect } from "@playwright/test";

test('Handle Alerts', async( {page}) => {
    test.setTimeout(90000);
    await page.goto('https://www.leafground.com/alert.xhtml;jsessionid=node0wiovd2y7sd9htn0xqshjjjni10707.node0');
    await page.waitForLoadState('load');
    page.on('dialog', async (dialog) =>{
        dialog.accept();
    });


    //By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. 
    //However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.
});