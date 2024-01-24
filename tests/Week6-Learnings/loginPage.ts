import { BasePage } from "./basePage";

export class LoginPage extends BasePage {

   async login(username: string, password: string) {
        await this.page.waitForLoadState('load');
        await this.page.fill('#username','saleem@testleaf.com');
        await this.page.fill('#password','Shazia@23');
        await this.page.click('#Login');
    }
}