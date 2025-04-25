class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.signInButton= page.locator("#login-button");
        this.userName = page.locator("#user-name");
        this.password= page.locator("#password");
    }

    async goto()
    {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async validLogin(email,password)
    {
        await this.userName.fill(email);
        await this.password.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = { LoginPage };