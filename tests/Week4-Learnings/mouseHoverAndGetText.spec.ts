import test from "@playwright/test";

test('Flipkart view products', async({page}) => { 
    await page.goto('https://www.flipkart.com/');
    await page.waitForLoadState('load');
    let model = await page.locator("//span[text() = 'Electronics']").innerText();  // to get locator text
    console.log(model);
    await page.locator("//span[text() = 'Electronics']").click();
    await page.waitForLoadState('load');
    await page.getByText('More',{exact:true}).hover();  // to mouse hover on any locator
    await page.waitForLoadState('domcontentloaded');
    let options = await page.locator('.qstlfY').allTextContents(); // to get all texts from list
    for(let i = 0; i< options.length; i++) {
        console.log(options[i].trim());
    }
    
});

