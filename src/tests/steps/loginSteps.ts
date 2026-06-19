import {Given, When, Then} from "@cucumber/cucumber";

import { expect} from "@playwright/test"
import { pageFixture } from "../hooks/pageFixture";

Given('User navigates to the application', async function () {

   await pageFixture.page.goto("https://automationexercise.com/");

})

Given('User clicks on the consent button', async function () {
    await pageFixture.page.locator("(//p[@class='fc-button-label'])[1]").click();
    await pageFixture.page.waitForTimeout(1000);
});

Given('User clicks on the login link', async function () {
    await pageFixture.page.locator("//li[contains(.,'Signup / Login')]").click();

});

Given('User enters the email as {string}', async function (email) {
    await pageFixture.page.locator("input[data-qa='login-email']").fill(email);
});

Given('User enters the password as {string}', async function (password) {
    await pageFixture.page.locator("input[data-qa='login-password']").fill(password);
});

When('User clicks on the login button', async function () {
    await pageFixture.page.locator("button[data-qa='login-button']").click();

});
Then ('Login should be successful', async function () {
    const text = await pageFixture.page.locator("//b[normalize-space(text())='florin415']").textContent();
    console.log("Username: "+ text);
});

When('Login should fail', async function () {
    const failuireLogin = pageFixture.page.locator("//p[normalize-space(text())='Your email or password is incorrect!']");
    await expect(failuireLogin).toBeVisible();
});   
