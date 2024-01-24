import {Browser, BrowserContext, chromium, Page} from 'playwright'

export class BasePage {

    public browser: Browser;
    public page: Page;

    constructor(page:Page, browser:Browser){
        this.page = page;
        this.browser = browser;
    }

    async navigateTo(url: string) {
        this.browser = await chromium.launch();
        const browserContext = await this.browser.newContext();
        const page = browserContext.newPage();
        await this.page.goto('https://login.salesforce.com');
    }

    async getTitle():Promise<string> {
        return await this.page.title(); 
    }
}