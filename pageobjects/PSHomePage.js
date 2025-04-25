class PSHomePage {

    constructor(page){
        this.page=this.page;
        this.products = page.locator("div h4");

    }

    async selectProduct(productName)
    {
        const productsTitle = await this.products.click();
        console.log(productsTitle);
        const count = await productsTitle.count();
        for(let i=0;i<count;i++)
        {
            if(await this.products.nth(i).locator("a").textContent() == productName)
            {
                await this.products.nth(i).click();
                break;
            }
        }

    }

    async gotoURL()
    {
        await this.page.goto("https://www.demoblaze.com/index.html");
    }
}
module.exports = { PSHomePage };