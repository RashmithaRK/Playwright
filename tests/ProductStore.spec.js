const { test, expect} = require('@playwright/test');
const { PSHomePage } = require('../pageobjects/PSHomePage');
const { testData} = JSON.parse(JSON.stringify(require('../utils/productStoreTestData.json')));
 
test('Login to site', async ({ page }) => {

const pshomePage = new PSHomePage(page);
await pshomePage.gotoURL();
await pshomePage.selectProduct(productName);


});