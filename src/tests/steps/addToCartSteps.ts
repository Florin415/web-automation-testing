import {Given, When, Then} from "@cucumber/cucumber";
import { expect} from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture";


Given('User clicks on the view product button', async function () {
    await pageFixture.page.locator("(//i[@class='fa fa-plus-square'])[1]").click();
});

Given('User clicks on the add to cart button', async function () {
    await pageFixture.page.locator("(//button[contains(@class,'btn btn-default')])[1]").click();
    await pageFixture.page.waitForTimeout(1000);
});


When('User clicks on the view cart button', async function () {
    await pageFixture.page.locator("//p[@class='text-center']//a[1]").click();

});

Then('The cart should have the product added', async function () {
    await pageFixture.page.waitForTimeout(2000);
    const cartItem = await pageFixture.page.locator("//a[normalize-space(text())='Blue Top']").textContent();
    expect(Number(cartItem.length)).toBeGreaterThan(0);

});
