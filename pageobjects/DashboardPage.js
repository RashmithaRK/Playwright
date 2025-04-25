class DashboardPage
{
    constructor(page)
    {
        this.page=page;
        this.products = page.locator(".inventory_item_description");
        this.productTexts = page.locator(".inventory_item_description div.inventory_item_name ");
        this.cartIcon = page.locator(".shopping_cart_link");
    }

    async searchProduct(productName)
    {
          const titles = await this.productTexts.allTextContents();
            console.log(titles);
          await this.page.waitForTimeout(5000);
          const count = await this.products.count();
        
        for(let i = 0; i <count; ++i)
          {
          if(await this.products.nth(i).locator("a").textContent()== productName)
            {
              await this.products.nth(i).locator("text=Add to cart").click();
              break;
          }
        }
    }

    async addToCart()
    {
        await this.cartIcon.click();
        await this.page.waitForTimeout(5000);
    }
}
module.exports = { DashboardPage };