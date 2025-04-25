
const { test, expect} = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/exampleTestData.json')));

test('Login to site', async ({ page }) => {
  const poManager = new POManager(page);

  const loginPage = poManager.getLoginPage();
  await loginPage.goto();
  await loginPage.validLogin(dataset.email,dataset.password);

  
const dashboardPage = poManager.getDashboardPage();
await dashboardPage.searchProduct(dataset.productName);
await dashboardPage.addToCart();

const checkoutPage = poManager.getCheckoutPage();
await checkoutPage.checkout(dataset.firstname,dataset.lastname,dataset.postalcode,dataset.text);

});


