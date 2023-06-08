import { Given, Then, When } from "@cucumber/cucumber";
import CommonPage from "../pages/CommonPage";
import ExampleHomePage from "../pages/ExampleHomePage";
import ExampleMoreInfoPage from "../pages/ExampleMoreInfoPage";

Given('I start the browser', async function () {
    await new CommonPage(this.web).startBrowser();
});

When('I navigate to {string}', async function (url) {
    await new ExampleHomePage(this.web).goToExamplePage(url);
});

When('I click on {string} link', async function (linkText) {
    await new ExampleHomePage(this.web).clickMoreInfoLink(linkText);
});

Then('a link with text {string} must be present', async function (linkText) {
    await new ExampleMoreInfoPage(this.web).verifyLinksPresent(linkText);
});

Then('the {string} box must contain {string} at index {string}', async function (domainBoxName, listName, listIndex) {
    await new ExampleMoreInfoPage(this.web).verifyLinkPresentInDomainNames(domainBoxName, listName, listIndex);
});

