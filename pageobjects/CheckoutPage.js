class CheckoutPage
{
    constructor(page)
    {
        this.page=page;
        this.pageItem = page.locator("div.cart_list div.cart_item");
        this.pageElementPresent = page.locator("a:has-text('Sauce Labs Backpack')");
        this.checkoutBtn= page.locator("#checkout");
        this.firstName=page.locator("#first-name");
        this.lastName=page.locator("#last-name");
        this.postalCode=page.locator("#postal-code");
        this.continue=page.locator("#continue");
        this.totalPrice = page.locator("div.summary_total_label");
        this.finishText=page.locator("#finish");
        this.textHave=page.locator("h2.complete-header");
    }

    async checkout(firstname,lastname,postalcode,text)
    {
await this.pageItem.waitFor();
const bool = await this.pageElementPresent.isVisible();
//expect(bool).toBeTruthy();
await this.checkoutBtn.click();
await this.firstName.fill(firstname);
await this.lastName.fill(lastname);
await this.postalCode.fill(postalcode);
await this.continue.click();
const totalPrice= await this.totalPrice.textContent();
console.log(totalPrice);
await this.finishText.click();
//expect(this.textHave).toHaveText(text);
    }
}
module.exports = { CheckoutPage };